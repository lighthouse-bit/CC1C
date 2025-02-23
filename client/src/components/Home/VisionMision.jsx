import React from "react";

const VisionMission = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Vision Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-900">OUR VISION</h2>
          <p className="mt-3">
            To create a world where empowered youth lead inclusive and sustainable communities, 
            fostering resilience and prosperity for all.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-900">OUR MISSION</h2>
          <p className="mt-3">
            To inspire and empower communities by fostering youth leadership, promoting gender equality, 
            and driving climate action for a sustainable and inclusive future.
          </p>
        </div>
      </div>

    <div className="grid md:grid-cols-2 gap-12">
        {/* Objectives Section */}
      <div className="mt-12">
            <h2 className="text-xl font-bold text-blue-900">OUR OBJECTIVES</h2>
            <ul className="mt-4 space-y-3">
            {[
                "To improve awareness and awareness of Climate justice, Gender and Social inclusion, WASH, Economic justice, Education, Health, Agriculture amongst citizens.",
                "To provide sustainable development (Appropriate technology and development).",
                "To provide technical assistance and capacity-building support to organizations and communities in implementing climate change mitigation and adaptation projects.",
                "To promote sustainable and resilient practices in sectors such as Energy, Transportation, Agriculture, and waste management, through policy advocacy and awareness-raising efforts.",
                "To enhance Gender and Social inclusion for vulnerable populations across the country.",
                "To end gender disparities and eliminate violence against women and girls' lives.",
                "To eliminate early and forced marriage. Securing equal participation and opportunities.",
                "To foster and develop increased learning and development opportunities for young people by encouraging and supporting them to contribute, steer initiatives.",
                "To eliminate destructive behaviors.",
                "To create opportunities and express their abilities and skills by empowering them in their decision making.",
            ].map((objective, index) => (
                <li key={index} className="flex items-start">
                <span className="text-blue-900 text-lg mr-2">●</span>
                <span>{objective}</span>
                </li>
            ))}
            </ul>
      </div>

      {/* Pillars of Action */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-blue-900">OUR PILLARS OF ACTION</h2>

        <div className="mt-6 space-y-6">
          {[
            {
              title: "Youth Participation",
              points: [
                "Mobilizing and equipping young people to engage in policy making and development process.",
                "Building capacity through leadership training, mentorship, and advocacy programs.",
              ],
            },
            {
              title: "Gender Equality",
              points: [
                "Promoting women’s empowerment and leadership in climate resilience and peacebuilding.",
                "Advocating for policies and initiatives that combat gender-based violence and discrimination.",
              ],
            },
            {
              title: "Climate Action",
              points: [
                "Driving community-led adaptation and mitigation projects.",
                "Partnering with local stakeholders to address climate-induced challenges in agriculture, energy, and water resources.",
              ],
            },
            {
              title: "Capacity Building",
              points: [
                "Delivering targeted training programs to strengthen community resilience.",
                "Supporting skills development for youth and women to enhance their impact and sustainability.",
              ],
            },
          ].map((pillar, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold">{pillar.title}</h3>
              <ul className="mt-2 space-y-2">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-900 text-lg mr-2">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default VisionMission;
