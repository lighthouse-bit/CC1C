import React, { useState } from "react";
import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const categories = [
  "Farm Programs", "Students", "Donors and Partners", "Events", "Trainings"
];

const ToGallery = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !category) {
      setMessage("Please select a file and a category.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category); // Send category to the server

    try {
      setUploading(true);
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
      setFile(null);
      setCategory(""); // Reset category after upload
    } catch (error) {
      setMessage("Upload failed");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold">Upload Image to Gallery</h2>

      {/* File Input */}
      <input type="file" onChange={handleFileChange} className="mt-3 w-full border p-2 rounded" />

      {/* Category Dropdown */}
      <select value={category} onChange={handleCategoryChange} className="mt-3 w-full border p-2 rounded">
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {/* Message Display */}
      {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default ToGallery;
