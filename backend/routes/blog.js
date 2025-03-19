import express from "express";
import supabase from "../Database/db.js";

const router = express.Router();

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all blog posts...");
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) throw error;

    res.json({ success: true, blogs: data });
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    res.status(500).json({ success: false, error: "Failed to fetch blog posts." });
  }
});

// Get a single blog post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Fetching blog post with ID: ${id}`);
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
    if (error) throw error;

    res.json({ success: true, blog: data });
  } catch (err) {
    console.error(`Error fetching blog post with ID ${id}:`, err);
    res.status(404).json({ success: false, error: "Blog post not found." });
  }
});

// Create a new blog post (Admin only)
router.post("/", async (req, res) => {
  const { title, content, image, author } = req.body;

  // Validate input
  if (!title || !content || !image || !author) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    console.log("Creating new blog post:", req.body);
    const { data, error } = await supabase.from("blogs").insert([{ title, content, image, author }]);
    if (error) throw error;

    res.status(201).json({ success: true, message: "Blog post created successfully!", blog: data });
  } catch (err) {
    console.error("Error creating blog post:", err);
    res.status(500).json({ success: false, error: "Failed to create blog post." });
  }
});

// Update a blog post (Admin only)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, image, author } = req.body;

  // Validate input
  if (!title || !content || !image || !author) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    console.log(`Updating blog post with ID: ${id}`);
    const { data, error } = await supabase.from("blogs").update({ title, content, image, author }).eq("id", id);
    if (error) throw error;

    res.json({ success: true, message: "Blog post updated successfully!", blog: data });
  } catch (err) {
    console.error(`Error updating blog post with ID ${id}:`, err);
    res.status(500).json({ success: false, error: "Failed to update blog post." });
  }
});

// Delete a blog post (Admin only)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Deleting blog post with ID: ${id}`);
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) throw error;

    res.json({ success: true, message: "Blog post deleted successfully!" });
  } catch (err) {
    console.error(`Error deleting blog post with ID ${id}:`, err);
    res.status(500).json({ success: false, error: "Failed to delete blog post." });
  }
});

export default router;
