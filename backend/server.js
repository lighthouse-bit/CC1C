const express = require('express');
const cors = require('cors');
const pool = require('./Database/database');
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json());


// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Connection error:", err);
  else console.log("Connected to PostgreSQL:", res.rows[0]);
});

app.use("/upload", express.static(path.join(__dirname, "upload")));


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
      "SELECT * FROM roles WHERE LOWER(role_name) = LIKE  LOWER($1)",
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



const PORT = process.env.PORT || 5000;
// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });