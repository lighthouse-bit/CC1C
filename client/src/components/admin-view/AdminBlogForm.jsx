import React, { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    author: "",
    authorImage: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
    //   console.log("Fetching blogs from:", `${API_BASE_URL}/api/blogs`);

      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();


      if (!data.success || !Array.isArray(data.blogs)) {
        throw new Error("Invalid response format");
      }

      setPosts(data.blogs); // ✅ Fix: Extract blogs array
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await response.text(); // Get raw response before parsing
      console.log("Raw Response:", text); // Log response

      const data = JSON.parse(text); // Manually parse JSON
      if (!response.ok) throw new Error(data.error || "Something went wrong");

      setMessage("Blog post created successfully!");
      setFormData({ title: "", content: "", image: "", author: "", authorImage: "" });
      fetchBlogs();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 mb-20 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Manage Blog Posts</h2>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Blog Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required
            className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea name="content" value={formData.content} onChange={handleChange} required
            className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md" placeholder="https://example.com/image.jpg" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} required
            className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Author Image URL</label>
          <input type="text" name="authorImage" value={formData.authorImage} onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md" placeholder="https://example.com/author.jpg" />
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Create Post
        </button>
      </form>

      {/* Blog List */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Existing Blog Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md mb-4">
            <h4 className="text-blue-900 font-bold">{post.title}</h4>
            <p className="text-gray-600">{post.content.substring(0, 50)}...</p>
            <button
              onClick={() => handleDelete(post.id)}
              className="mt-2 bg-red-600 text-white py-1 px-3 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogForm;
