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

      {/* Responsive Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-center items-center">
        {images.length > 0 ? (
          <>
            {/* Left Image */}
            {images[0] && (
              <img
                src={`${API_BASE_URL}${images[0]?.image_path}`} 
                alt="Gallery Left"
                className="w-full sm:w-40 h-28 object-cover rounded-lg shadow-md mx-auto"
              />
            )}

            {/* Main Image with Button */}
            {images[1] && (
              <div className="relative w-full sm:w-96 h-72 mx-auto">
                <img
                  src={`${API_BASE_URL}${images[1]?.image_path}`} 
                  alt="Main Gallery"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <Link to="gallery">
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg font-semibold">
                    View Gallery
                  </button>
                </Link>
              </div>
            )}

            {/* Right Image */}
            {images[2] && (
              <img
                src={`${API_BASE_URL}${images[2]?.image_path}`} 
                alt="Gallery Right"
                className="w-full sm:w-40 h-28 object-cover rounded-lg shadow-md mx-auto"
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
