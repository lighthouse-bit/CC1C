import React from "react";
import gle from "../../assets/gle.jpeg"
import gl from "../../assets/gl.jpg"

const Afforestation = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
          GIRLS LEADERSHIP AND EMPOWERMENT
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <img src={gl} alt="Team working together"  className="w-full max-w-full h-auto rounded-lg mt-6 object-cover"/>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
         
          <p>
          We believe in the power of girls to drive change in society. Our Girls’ Leadership and Empowerment Program provides mentorship, skills training, and leadership development opportunities to equip young girls with the confidence and knowledge they need to thrive. We create safe spaces for adolescent girls to express themselves, access education, and develop essential life skills. Through workshops, advocacy, and mentorship, we are nurturing the next generation of female leaders who will challenge gender inequalities and break barriers in their communities.

          </p>
  
        </div>
      </div>
    );
  };
  
  export default Afforestation;
  