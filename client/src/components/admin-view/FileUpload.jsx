import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus(response.data.message);
      console.log("File uploaded:", response.data.filePath);
    } catch (error) {
      setUploadStatus("File upload failed.");
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-3">Upload a File</h2>
      <input type="file" onChange={handleFileChange} className="mb-3" />
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md mb-3" />}
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Upload File
      </button>
      {uploadStatus && <p className="mt-2 text-sm text-gray-700">{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;
