import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("Fetching from:", `${API_BASE_URL}/api/gallery`);

    fetch(`${API_BASE_URL}/api/gallery`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Gallery API Response:", data);
        setImages(Array.isArray(data) ? data : []);
      })
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  return (
    <div className="bg-gray-200 py-10 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">GALLERY</h2>

      {/* Gallery Section */}
      <div className="flex justify-center items-center space-x-3">
        {images.length > 0 ? (
          <>
            {images[0] && (
              <img
                src={`${API_BASE_URL}${images[0]?.image_path}`} // Updated to use image_path
                alt="Gallery Left"
                className="w-40 h-28 object-cover rounded-lg shadow-md"
              />
            )}

            {images[1] && (
              <div className="relative">
                <img
                  src={`${API_BASE_URL}${images[1]?.image_path}`} // Updated to use image_path
                  alt="Main Gallery"
                  className="w-96 h-72 object-cover rounded-lg shadow-lg"
                />
                <Link to="gallery">
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg font-semibold">
                    View Gallery
                  </button>
                </Link>
              </div>
            )}

            {images[2] && (
              <img
                src={`${API_BASE_URL}${images[2]?.image_path}`} // Updated to use image_path
                alt="Gallery Right"
                className="w-40 h-28 object-cover rounded-lg shadow-md"
              />
            )}
          </>
        ) : (
          <p className="text-gray-500 text-center">Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
