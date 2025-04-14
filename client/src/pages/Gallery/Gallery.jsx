import { useEffect, useState } from "react";

const categories = [
  "All Photos", "Conferences", "Trainings", "Advocacy Efforts", "Community Outreach", "Programs"
];

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Stores the clicked image

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/gallery`)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  const filteredImages = selectedCategory === "All Photos" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-blue-900">GALLERY</h1>
      <hr className="mb-20"/>

      {/* Category Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-md ${selectedCategory === category ? "bg-[#052F6B] text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img, index) => (
          <img 
            key={index} 
            src={`${API_BASE_URL}${img.image_path}`} 
            alt="Gallery" 
            className="w-full h-auto rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(`${API_BASE_URL}${img.image_path}`)} // Open modal on click
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedImage(null)} // Close modal when clicking outside
        >
          <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
