import React, { useEffect, useState } from "react";
// import founder from "../../../assets/founder.png";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const FounderMessage = () => {
      const [founder, setFounder] = useState(null);
  
      useEffect(() => {
          const roleName = encodeURIComponent("Founder and CEO "); // Encode spaces
          fetch(`${API_BASE_URL}/api/roles/role/${roleName}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors", // Ensures CORS handling
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Fetched Founder:", data);
              setFounder(data);
            })
            .catch((error) => console.error("Error fetching founder:", error));
        }, []);
    return (
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        {/* Profile Image */}
        {founder && (
        <div className="flex flex-col items-center">
          <img
            src={`${API_BASE_URL}${founder.image_path}`} 
            alt="Founder"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <p className="mt-3 text-gray-700">{founder.person_name}</p>
          <p className="font-bold text-gray-900">{founder.role_name}</p>
        </div>
        )}
  
        {/* Message Heading */}
        <h2 className="mt-6 text-xl font-bold text-blue-900 uppercase  pb-2">
          MESSAGE FROM THE FOUNDER
        </h2>
  
        {/* Message Text */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae
          enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non
          varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien.
          Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida.
        </p>
  
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero
          sit. Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh
          ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing
          orci viverra posuere. Sodales nisl aliquet mauris pellentesque sed.
        </p>
      </section>
    );
  };
  
  export default FounderMessage;
  