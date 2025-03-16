import React from "react";
import nys1 from "../../assets/nys1.png";
import nys2 from "../../assets/nys2.png";
import nys3 from "../../assets/nys3.png";
import sf from "../../assets/sf.jpeg"

const YouthConsultant = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
          SUSTAINABLE FARMING
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <img src={sf} alt="Team working together"  className="w-full max-w-full h-auto rounded-lg mt-6 object-cover"/>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
         
          <p>
          Agriculture remains a crucial sector for economic growth and food security. Our Sustainable Farming Program promotes climate-smart agricultural practices that enhance productivity while protecting the environment. We provide training on organic farming, agroforestry, soil conservation, and sustainable water management. By supporting small-scale farmers, especially women and youth, we aim to improve livelihoods, boost food production, and reduce the effects of climate change on agriculture.

          </p>
  
        </div>
      </div>
    );
  };
  
  export default YouthConsultant;
  