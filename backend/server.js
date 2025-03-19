import express from "express";
import cors from "cors";
import supabase from "./Database/db.js"; 
import path from "path";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer"





dotenv.config();

const app = express();
const allowedOrigins = ["https://cc-1-c.vercel.app", "http://localhost:5173"];

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/contact", async (req, res) => {
  console.log("✅ POST /api/contact hit"); // Debugging log

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

// Debugging log to verify registered routes
console.log("✅ Registered routes:", app._router.stack.map(r => r.route?.path).filter(Boolean));


app.post("/api/contact", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ success: true, message: "Request received!" });
});





// Set up static folder to serve uploaded files
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/upload", express.static(path.join(__dirname, "upload")));




// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/"); // Save files inside the "upload" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename files
  },
});
const upload = multer({ storage });


// Fetch all roles
app.get("/api/roles", async (req, res) => {
  const { data, error } = await supabase.from("roles").select("*");

  if (error) {
    console.error("Error fetching roles:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

// Fetch a role by ID
app.get("/api/roles/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("roles").select("*").eq("id", id).single();

  if (error || !data) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(data);
});

// Fetch roles by role name (case-insensitive search)
app.get("/api/roles/role/:role_name", async (req, res) => {
  const { role_name } = req.params;
  const { data, error } = await supabase
    .from("roles")
    .select("*")
    .ilike("role_name", `%${role_name}%`); // Case-insensitive search

  if (error || !data.length) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(data[0]); // Return the first match
});

// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ filePath: `/upload/${req.file.filename}`, message: "File uploaded successfully!" });
});

// Upload Image API for Gallery
app.post("/api/gallery/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const { category } = req.body;

  const { error } = await supabase.from("gallery").insert([
    { image_path: `/upload/${req.file.filename}`, category },
  ]);

  if (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Error saving to database" });
  }

  res.json({ filePath: `/upload/${req.file.filename}`, message: "File uploaded successfully!" });
});

// Fetch all gallery images
app.get("/api/gallery", async (req, res) => {
  const { data, error } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery images:", error);
    return res.status(500).json({ message: "Server error" });
  }

  res.json(data);
});




app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

console.log("Registered routes:", app._router.stack.map(r => r.route?.path).filter(Boolean));


console.log("📨 EMAIL_USER:", process.env.EMAIL_USER);
console.log("📨 RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
