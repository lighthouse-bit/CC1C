import express from "express";
import cors from "cors";
import { createClient } from '@supabase/supabase-js';
import path from "path";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Initialize environment variables
dotenv.config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Express
const app = express();

// Configure paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadDir = path.join(__dirname, "upload");

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-production-domain.com'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/upload", express.static(uploadDir, {
  setHeaders: (res) => {
    res.header("Access-Control-Allow-Origin", "*");
  }
}));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { 
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 1
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, and GIF files are allowed'));
    }
  }
});

// Contact Form Endpoint
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
      html: `<p>From: ${email}</p><p>${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ 
      error: "Failed to send email",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Gallery Upload Endpoint
app.post("/api/gallery/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!req.body.category) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "Category is required" });
    }

    const filePath = `/upload/${req.file.filename}`;
    const fileUrl = `${req.protocol}://${req.get('host')}${filePath}`;

    console.log("Attempting to upload to Supabase:", {
      image_path: filePath,
      category: req.body.category,
      file_url: fileUrl
    });

    const { data, error } = await supabase
      .from('gallery')
      .insert([{
        image_path: filePath,
        image_url: fileUrl,
        category: req.body.category
      }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      fs.unlinkSync(req.file.path);
      return res.status(500).json({
        message: "Database error",
        error: error.message,
        details: error.details
      });
    }

    res.json({
      success: true,
      filePath,
      fileUrl,
      dbRecord: data[0],
      message: "File uploaded successfully!"
    });

  } catch (err) {
    console.error("Upload error:", err);
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
      message: "Server error during upload",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
});

// Get Gallery Images
app.get("/api/gallery", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Map data to include full URLs
    const images = data.map(image => ({
      ...image,
      full_url: `${req.protocol}://${req.get('host')}${image.image_path}`
    }));

    res.json(images);
  } catch (err) {
    console.error("Gallery fetch error:", err);
    res.status(500).json({
      message: "Failed to fetch gallery",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Test Endpoints
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uploadDirExists: fs.existsSync(uploadDir),
    supabaseConnected: !!supabase
  });
});

app.post("/api/test-upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  
  // Clean up test file
  fs.unlinkSync(req.file.path);
  
  res.json({
    success: true,
    message: "Test upload successful",
    fileInfo: {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);

  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: "File upload error",
      error: err.code,
      details: err.message
    });
  }

  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Upload directory: ${uploadDir}`);
  console.log(`Supabase connected: ${!!supabase}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});