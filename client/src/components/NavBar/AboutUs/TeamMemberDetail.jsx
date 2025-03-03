import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Get team member ID from URL


const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const TeamMemberDetail = () => {
  const { id } = useParams(); 
  const [member, setMember] = useState(null);

  useEffect(() => {
    // Fetch specific team member data
    fetch(`${API_BASE_URL}/api/roles/${id}`)
      .then((response) => response.json())
      .then((data) => setMember(data))
      .catch((error) => console.error("Error fetching team member details:", error));
  }, [id]);

  if (!member) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-blue-900 text-center uppercase border-b pb-2">
        {member.person_name}
      </h2>
      <div className="mt-8 flex flex-col items-center text-center">
        <img
          src={`${API_BASE_URL}${member.image_path}`}
          alt={member.person_name}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <p className="mt-3 font-bold text-blue-900">{member.role_name}</p>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
