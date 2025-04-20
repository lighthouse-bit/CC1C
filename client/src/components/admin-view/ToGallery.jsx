import React, { useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const categories = [
  "Conferences", "Trainings", "Advocacy Efforts", "Community Outreach", "Programs"
];

const ToGallery = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !category) {
      setMessage({ text: "Please select a file and a category.", isError: true });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category); // Send category to the server

    try {
      setUploading(true);
      const response = await axios.post(`${API_BASE_URL}/api/gallery/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ text: response.data.message, isError: false });
      setFile(null);
      setCategory("");
    } catch (error) {
      setMessage({ text: "Upload failed", isError: true });
      console.error("Upload error:", error.response?.data || error.message || error);

    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Upload Image to Gallery</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image File
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading || !file || !category}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            uploading || !file || !category
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {uploading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </>
          ) : (
            'Upload Image'
          )}
        </button>

        {message.text && (
          <div className={`p-3 rounded-md ${
            message.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
            {message.text}
          </div>
        )}
      </div>
      <Link to='/admin/gallery-del'><Button classname='mt-14'>Manage Gallery</Button></Link>
    </div>
  );
};

export default ToGallery;
