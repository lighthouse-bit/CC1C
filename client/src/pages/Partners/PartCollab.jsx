import React from 'react';
import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.JPG";
import partner4 from "../../assets/partner4.jpg";
import stc from "../../assets/stc.jpg";

const partners = [partner1, partner2, partner4,stc];

const PartCollab = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 text-center mb-8">
        OUR PARTNERS AND COLLABORATORS
      </h2>

      {/* For Small Screens - Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 justify-items-center px-4">
        {partners.map((logo, index) => (
          <div key={index} className="w-28 sm:w-32">
            <img src={logo} alt="Partner Logo" className="w-full h-auto object-contain rounded-lg shadow-md" />
          </div>
        ))}
      </div>

      {/* For Larger Screens - Auto Scrolling */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex gap-6 justify-center animate-scroll">
          {partners.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img src={logo} alt="Partner Logo" className="w-full h-auto object-contain rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartCollab;
