import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const roleHierarchy = {
  "Founder and CEO": 1,
  "Chief Impact Officer (CIO)": 2,
  "Head of Strategic Partnerships": 3,
  "Programs Manager": 4,
  "Grants and Development Manager": 5,
  "Communications Lead Officer": 6,
};

const MeetOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/roles`)
      .then((response) => response.json())
      .then((data) => {
        // Filter out "Advisory Board"
        const filteredRoles = data.filter(
          (role) => !/^(advisory board|executive board)$/i.test(role.role_name?.trim())
        );

        // Sort roles based on hierarchy, others follow in default order
        const sortedRoles = filteredRoles.sort((a, b) => {
          const rankA = roleHierarchy[a.role_name] || 999; // Default to 999 if not in hierarchy
          const rankB = roleHierarchy[b.role_name] || 999;
          return rankA - rankB;
        });

        setTeamMembers(sortedRoles);
      })
      .catch((error) => console.error("Error fetching team members:", error));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-blue-900 text-center uppercase border-b pb-2">
        MEET OUR TEAM
      </h2>

      {/* Team Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center mb-20">
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
