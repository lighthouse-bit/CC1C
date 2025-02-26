const express = require('express');
const cors = require('cors');
const pool = require('./Database/database');
const path = require("path");
const multer = require("multer");
require('dotenv').config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); 

app.use(express.json());

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Connection error:", err);
  else console.log("Connected to PostgreSQL:", res.rows[0]);
});

// Set up static folder to serve uploaded files
app.use("/upload", express.static(path.join(__dirname, "upload")));


// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/"); // Save files inside the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename files to prevent overwrites
  },
});
const upload = multer({ storage });



// Serve static files from the "uploads" directory
app.get("/api/roles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM roles"); // Fetch data from the database
    
    res.json(result.rows); // Send the data as a JSON response
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/api/roles/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM roles WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching team member:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/roles/role/:role_name", async (req, res) => {
  const { role_name } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM roles WHERE LOWER(role_name) LIKE LOWER($1)",
      [`%${role_name}%`] 
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.json(result.rows[0]); // Return the first matching role
  } catch (err) {
    console.error("Error fetching role:", err);
    res.status(500).send("Server error");
  }
});


// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  // console.log("File uploaded:", req.file)
  res.json({ filePath: `/upload/${req.file.filename}`, message: "File uploaded successfully!" });

});



// Upload Image API for Gallery
app.post("/api/gallery/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const { category } = req.body;

  try {
    // Insert file and category into the database
    await pool.query("INSERT INTO gallery (image_path, category) VALUES ($1, $2)", [
      `/upload/${req.file.filename}`,
      category
    ]);

    res.json({ filePath: `/upload/${req.file.filename}`, message: "File uploaded successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Error saving to database" });
  }
});


// Fetch All Gallery Images
app.get("/api/gallery", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gallery ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching gallery images:", err);
    res.status(500).send("Server error");
  }
});




const PORT = process.env.PORT || 5000;
// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });