import { useState } from "react";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/gallery8.png";
import gallery9 from "../../assets/gallery9.png";
import gallery10 from "../../assets/gallery10.png";

const categories = [
  "All Photos", "Farm Programs", "Students", "Donors and Partners", "Events", "Trainings"
];

const images = [
  { src: gallery1, category: "Students" },
  { src: gallery2, category: "Farm Programs" },
  { src: gallery3, category: "Events" },
  { src: gallery4, category: "Donors and Partners" },
  { src: gallery5, category: "Trainings" },
  { src: gallery6, category: "Students" },
  { src: gallery7, category: "Events" },
  { src: gallery8, category: "Farm Programs" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");

  const filteredImages = selectedCategory === "All Photos" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-blue-900">GALLERY</h1>
      <hr  className="mb-20"/>
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
          <img key={index} src={img.src} alt="Gallery" className="w-full h-auto rounded-md shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
