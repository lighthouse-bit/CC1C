import React, { useState, useEffect } from 'react';
import axios from 'axios';




const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


const GalleryDeleteComponent = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/gallery`) ;
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Handle delete
  const deleteImage = async (imagePath) => {
    try {
        const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
        console.log("DELETE request to:", `${API_BASE_URL}/api/gallery/${cleanPath}`);
        await axios.delete(`${API_BASE_URL}/api/gallery/${cleanPath}`);

        setImages(images.filter(img => img.image_path !== imagePath));
        } catch (error) {
        console.error('Error deleting image:', error);
        }
  };

  if (loading) return <div className="text-center py-10 text-gray-500">Loading gallery...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.image_path} className="relative rounded-lg shadow-md overflow-hidden">
              <img
                src={`${API_BASE_URL}${img.image_path}`}
                alt="Gallery Item"
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => deleteImage(img.image_path)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded shadow-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryDeleteComponent;
