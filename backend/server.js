import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import supabase from "./Database/db.js"; // Import Supabase client
import blogRoutes from "./routes/blog.js";
import nodemailer from "nodemailer";
import fs from "fs";

dotenv.config();

const app = express();


console.log("Supabase Key:", process.env.SUPABASE_KEY?.slice(0, 200)); 


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRoutes);

// Multer config for in-memory upload (no local storage)
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// Contact form
app.post("/api/contact", async (req, res) => {
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
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

app.post("/api/gallery/upload", upload.single("file"), async (req, res) => {
  console.log("🔔 Route reached");
  console.log("File received:", req.file?.originalname);
  console.log("Category received:", req.body?.category);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const bucketName = "galleria";
    const filePath = `uploads/${Date.now()}_${req.file.originalname}`;

    // Upload to Supabase
    const { data, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: true,
      });

    if (uploadError) {
      console.error("Upload Error:", uploadError);
      return res.status(500).json({ message: "Error uploading to Supabase", error: uploadError });
    }

    const publicURL = `https://fxvvrieqefxovspeveba.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;
    console.log("✅ Final Public URL:", publicURL);

    if (!publicURL || typeof publicURL !== "string") {
      return res.status(500).json({ message: "Failed to generate public URL" });
    }

    const { error: dbError } = await supabase
      .from("gallery")
      .insert([
        {
          image_path: publicURL,
          category: req.body.category,
        },
      ]);

    if (dbError) {
      console.error("❌ Database Error:", dbError);
      return res.status(500).json({ message: "Error saving to database", error: dbError });
    }

    res.json({ imagePath: publicURL, message: "✅ File uploaded successfully!" });
  } catch (error) {
    console.error("Unexpected error:", error.message, error.stack);
    res.status(500).json({ message: "Server error", error });
  }
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

// Use parameter for dynamic file path in delete route
app.delete("/api/gallery", async (req, res) => {
  const { key } = req.query; // uploads/filename.jpg
  if (!key) return res.status(400).json({ error: "Missing key" });

  const { error: dbError } = await supabase
    .from("gallery")
    .delete()
    .eq("image_path", `/${key}`); // Ensure it matches the DB stored value (with slash)

  if (dbError) {
    console.error("Supabase delete error:", dbError);
    return res.status(500).json({ error: "Database deletion failed" });
  }

  res.json({ message: "Image deleted" });
});

// Fetch all roles
app.get("/api/roles", async (req, res) => {
  const { data, error } = await supabase.from("roles").select("*");

  if (error) {
    console.error("Error fetching roles:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

// Fetch role by ID
app.get("/api/roles/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("roles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(data);
});

// Fetch role by role_name (case-insensitive)
app.get("/api/roles/role/:role_name", async (req, res) => {
  const { role_name } = req.params;
  const { data, error } = await supabase
    .from("roles")
    .select("*")
    .ilike("role_name", `%${role_name}%`);

  if (error || !data.length) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(data[0]);
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 5000;
export default app;
