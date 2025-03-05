import React from "react";
import partner from "../../assets/partner.png";
import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.JPG";
import partner3 from "../../assets/partner3.PNG";
import partner4 from "../../assets/partner4.jpg";

const partners = [
    partner1,
    partner2,
    partner3,
    partner,
    partner4,
];

const PartnersSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
        OUR PARTNERS AND COLLABORATORS
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-6 justify-center animate-scroll">
          {partners.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img
                src={logo}
                alt="Partner Logo"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
