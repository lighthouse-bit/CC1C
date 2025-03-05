import React, { useEffect, useState } from "react";
import founder1 from "../../../assets/founder1.jpeg";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const FounderMessage = () => {
      const [founder, setFounder] = useState(null);
  
      useEffect(() => {
          const roleName = encodeURIComponent("Founder and CEO"); // Encode spaces
          fetch(`${API_BASE_URL}/api/roles/role/${roleName}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("Fetched Founder:", data);
              setFounder(data);
            })
            .catch((error) => console.error("Error fetching founder:", error));
        }, []);
    return (
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
          <img
            src={founder1} 
            alt="Founder"
            className="w-full h-auto rounded-lg mt-6"
          />
        {/* Profile Image */}
        {founder && (
        <div className="flex flex-col items-center">
          
          <p className="mt-3 text-gray-700">{founder.person_name}</p>
          <p className="font-bold text-gray-900">{founder.role_name}</p>
        </div>
        )}
  
        {/* Message Heading */}
        <h2 className="mt-6 text-xl font-bold text-blue-900 uppercase  pb-2">
          MESSAGE FROM THE FOUNDER
        </h2>
  
        {/* Message Text */}
        <p className="mt-3 leading-relaxed">
        At the Center for Community Impact and Sustainability (CCIS), we are driven by the belief that real change happens when communities are empowered at the grassroots level to lead their own transformation.
        </p>
        <p className="mt-3 leading-relaxed">
        Through our work, we amplify the voices of youth in decision-making and equipping them with the skills and resources to thrive.
        </p>
        <p className="mt-3 leading-relaxed">
        CCIS is more than an organization; it is a dynamic platform of passionate  young leaders, dedicated partners, and resilient communities working together to create lasting impact. 
        </p>
        <p className="mt-3 leading-relaxed">
        Our work is deeply rooted in purpose. It’s about the young girl who finally gets access to education, the youth developing innovative projects to tackle climate change, and the community that rebuilds stronger after conflict or disaster. We are not waiting for the future to happen—we are shaping it, together.
        </p>
        <p className="mt-4 leading-relaxed">
        To every partner, supporter, and chagemaker—thank you for walking this journey with us. 
        Your collaboration and commitment strengthen our efforts, and together, we are shaping a future that is sustainable and filled with possibilities, by the grace of God Almighty.
        </p>
        <p className="mt-3 leading-relaxed">
        Let’s transform, innovate, and build the future we deserve.

        </p>
      </section>
    );
  };
  
  export default FounderMessage;
  