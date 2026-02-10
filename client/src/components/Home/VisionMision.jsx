import React from "react";

const VisionMission = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Vision Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-900">OUR VISION</h2>
          <p className="mt-3">
          Our Vision
          To build a world where empowered youth lead inclusive and sustainable communities, fostering resilience, peace and shared prosperity for all.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-900">OUR MISSION</h2>
          <p className="mt-3">
          To inspire and empower vulnerable communities by fostering sustainability, driving innovation, promoting education, and supporting development for a thriving future.

          </p>
        </div>
      </div>

    
      
    </div>
  );
};

export default VisionMission;
