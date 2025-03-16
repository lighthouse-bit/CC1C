import React from "react";
import hygiene1 from "../../assets/hygiene1.png";
import hygiene2 from "../../assets/hygiene2.png";
import hygiene3 from "../../assets/hygiene3.png";
import yps from "../../assets/yps.JPG"

const Hygiene = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
          YOUTH, PEACE AND SECURITY
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <img src={yps} alt="Team working together"  className="w-full max-w-full h-auto rounded-lg mt-6 object-cover"/>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
          
          <p>
          Young people play a crucial role in peacebuilding and conflict resolution. Our Youth, Peace, and Security Program empowers young individuals to become agents of peace and stability in their communities. Through dialogue, leadership training, and conflict resolution workshops, we equip youth with the skills to address social tensions, advocate for peace, and prevent violence. We work closely with local leaders and organizations to promote social cohesion and ensure that young voices are included in decision-making processes for sustainable peace.

          </p>
  
        </div>
      </div>
    );
  };
  
  export default Hygiene;
  