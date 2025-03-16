import React from "react";
import caa from "../../assets/caa.jpg"


const Leadership = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
          CLIMATE ACTION AND ADVOCACY
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <img src={caa} alt="Team working together"  className="w-full max-w-full h-auto rounded-lg mt-6 object-cover"/>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
         
          <p>
          Climate change is one of the biggest challenges of our time, and CCIS is at the forefront of advocacy efforts to combat its impact. We engage communities, policymakers, and stakeholders to promote sustainable environmental practices and climate resilience. Through education, awareness campaigns, and action-oriented initiatives, we empower individuals to take a stand against environmental degradation. Our advocacy includes tree planting, waste management, renewable energy promotion, and climate policy engagement to ensure a greener and more sustainable future.

          </p>

        </div>
      </div>
    );
  };
  
  export default Leadership;
  