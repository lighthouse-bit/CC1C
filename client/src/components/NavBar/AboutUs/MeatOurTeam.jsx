import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import API_BASE_URL from "../../../../config";

const MeetOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    
    fetch(`${API_BASE_URL}/api/roles`) 
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching team members:", error));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-blue-9jh00 text-center uppercase border-b pb-2">
        MEET OUR TEAM
      </h2>

      {/* Team Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center">
            <img
              src={`${API_BASE_URL}${member.image_path}`}
              alt={member.person_name}
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <p className="mt-3 text-gray-700">{member.person_name}</p>
            <p className="font-bold text-blue-900">{member.role_name}</p>
            
            {/* Show a shortened description */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {member.description.length > 100 
                ? `${member.description.substring(0, 100)}...` 
                : member.description}
            </p>

            {/* Read More Link */}
            {member.description.length > 100 && (
              <Link 
                to={`/about-us/our-team/${member.id}`} 
                className="text-blue-600 text-sm font-semibold mt-2 hover:underline"
              >
                Read More
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
