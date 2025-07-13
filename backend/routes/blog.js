import express from "express";
import supabase from "../Database/db.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    
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
    // console.log(`Fetching blog post with ID: ${id}`);
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
    if (error) throw error;

    res.json({ success: true, blog: data });
  } catch (err) {
    console.error(`Error fetching blog post with ID ${id}:`, err);
    res.status(404).json({ success: false, error: "Blog post not found." });
  }
});

// Create a new blog post (Admin only)
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  async (req, res) => {
    const { title, content, author } = req.body;
    const imageFile = req.files?.image?.[0];
    const authorImageFile = req.files?.authorImage?.[0];

    // ✅ Only keep this single, correct validation block
    if (!title || !content || !author || !imageFile || !authorImageFile) {
      return res
        .status(400)
        .json({ success: false, error: "All fields including images are required." });
    }

    try {
      const timestamp = Date.now();
      const imagePath = `blogs/${timestamp}_${imageFile.originalname}`;
      const authorPath = `authors/${timestamp}_${authorImageFile.originalname}`;

      // ✅ Upload blog image to the "blog" bucket
      const { error: imageError } = await supabase.storage
        .from("blog")
        .upload(imagePath, imageFile.buffer, {
          contentType: imageFile.mimetype,
          upsert: true,
        });

      // ✅ Upload author image to the "blog" bucket
      const { error: authorError } = await supabase.storage
        .from("blog")
        .upload(authorPath, authorImageFile.buffer, {
          contentType: authorImageFile.mimetype,
          upsert: true,
        });

      if (imageError || authorError) {
        return res
          .status(500)
          .json({ success: false, error: "Failed to upload image(s)" });
      }

      const blogImageURL = `https://fxvvrieqefxovspeveba.supabase.co/storage/v1/object/public/blog/${imagePath}`;
      const authorImageURL = `https://fxvvrieqefxovspeveba.supabase.co/storage/v1/object/public/blog/${authorPath}`;

      const { data, error: dbError } = await supabase
        .from("blogs")
        .insert([
          {
            title,
            content,
            author,
            image: blogImageURL,
            authorImage: authorImageURL,
          },
        ])
        .select()
        .single();

      if (dbError) throw dbError;

      res.status(201).json({
        success: true,
        message: "Blog post created successfully!",
        blog: data,
      });
    } catch (err) {
      console.error("Upload error:", err);
      res
        .status(500)
        .json({ success: false, error: "Failed to create blog post." });
    }
  }
);



// Update a blog post (Admin only)
// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, content, image, author } = req.body;


//   if (!title || !content || !image || !author) {
//     return res.status(400).json({ success: false, error: "All fields are required." });
//   }

//   try {
    
//     const { data, error } = await supabase.from("blogs").update({ title, content, image, author }).eq("id", id);
//     if (error) throw error;

//     res.json({ success: true, message: "Blog post updated successfully!", blog: data });
//   } catch (err) {
//     console.error(`Error updating blog post with ID ${id}:`, err);
//     res.status(500).json({ success: false, error: "Failed to update blog post." });
//   }
// });

// Delete a blog post (Admin only)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // console.log(`Deleting blog post with ID: ${id}`);
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) throw error;

    res.json({ success: true, message: "Blog post deleted successfully!" });
  } catch (err) {
    console.error(`Error deleting blog post with ID ${id}:`, err);
    res.status(500).json({ success: false, error: "Failed to delete blog post." });
  }
});

export default router;
