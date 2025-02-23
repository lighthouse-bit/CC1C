import React from "react";
import vision from "../../../assets/vision.png";
import mission from "../../../assets/mission.png";

const VisionMission = () => {
    return (
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">
          VISION AND MISSION STATEMENT
        </h2>
  
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Vision Section */}
          <div>
            <img
              src={vision}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900">OUR VISION</h3>
            <p className="text-gray-700 mt-2">
              To create a world where empowered youth lead inclusive and sustainable
              communities, fostering resilience and prosperity for all.
            </p>
          </div>
  
          {/* Mission Section */}
          <div className="order-2 md:order-none">
            <h3 className="text-xl font-semibold text-blue-900">OUR MISSION</h3>
            <p className="text-gray-700 mt-2">
              To inspire and empower communities by fostering youth leadership,
              promoting gender equality, and driving climate action for a sustainable
              and inclusive future.
            </p>
          </div>
          <div className="order-1 md:order-none">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default VisionMission;
  