import React from "react";
import partner from "../../assets/partner.png";

const partners = [
    partner,
    partner,
    partner,
    partner,
    partner,
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
