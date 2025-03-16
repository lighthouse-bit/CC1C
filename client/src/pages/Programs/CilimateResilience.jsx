import React from "react";
import sjc from "../../assets/sjc.jpeg"

const ClimateResilience = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
          SKILLS DEVELPEMENT & JOB CREATION
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <img src={sjc} alt="Team working together"  className="w-full max-w-full h-auto rounded-lg mt-6 object-cover"/>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
       
          <p>
          Unemployment remains a major challenge for young people. Our Skills Development and Job Creation Program provides vocational training, entrepreneurship coaching, and career development support to help youth secure meaningful employment or start their own businesses. We offer practical training in various fields such as tailoring, ICT, agribusiness, and craftsmanship. By equipping young people with marketable skills, we aim to reduce poverty, promote economic independence, and foster self-reliance.
          </p>
  
        </div>
      </div>
    );
  };
  
  export default ClimateResilience;
  