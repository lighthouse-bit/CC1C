import { useEffect, useState } from "react";

const categories = [
  "All Photos", "Farm Programs", "Students", "Donors and Partners", "Events", "Trainings"
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/gallery") 
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img, index) => (
          <img key={index} src={`http://localhost:5000${img.image_path}`} alt="Gallery" className="w-full h-auto rounded-md shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
