import React from "react";
import objectives from "../../../assets/objectives.png";

const ObjectivesSection = () => {
    return (
      <section className="max-w-6xl mx-auto py-12 px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-900 uppercase border-b pb-2">
          OUR OBJECTIVES AND KEY PILLARS
        </h2>
  
        {/* Subheading */}
        <h3 className="text-xl font-bold text-blue-900 mt-6">OUR OBJECTIVES</h3>
  
        {/* Objectives List */}
        <ul className="mt-4 space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To improve awareness and awareness of Climate justice, Gender and Social inclusion, WASH, Economic justice, Education, Health, Agriculture amongst citizens.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To provide sustainable development (Appropriate technology and development).
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To provide technical assistance and capacity-building support to organizations and communities in implementing climate change mitigation and adaptation projects.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To promote sustainable and resilient practices in sectors such as Energy, Transportation, Agriculture, and waste management, through policy advocacy and awareness-raising efforts.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To enhance Gender and Social inclusion for vulnerable populations across the country.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To end gender disparities and eliminate violence against women and girls’ lives.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To eliminate early and forced marriage. Securing equal participation and opportunities.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To foster and develop increased learning and development opportunities for young people by encouraging and supporting them to contribute, steer initiatives.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To eliminate destructive behaviors.
          </li>
          <li className="flex items-start">
            <span className="text-lg text-blue-900 mr-2">●</span>
            To create opportunities and express their abilities and skills by empowering them in their decision making.
          </li>
        </ul>


        <div className="mt-12">
            {/* Image */}
            <img 
                src={objectives}
                alt="Team working together" 
                className="w-full h-auto rounded-lg"
            />

            {/* Heading */}
            <h3 className="text-xl font-bold text-blue-900 mt-6">OUR PILLARS OF ACTION</h3>

            {/* Sections */}
            <div className="mt-4 space-y-6 text-gray-700">
                {/* Youth Participation */}
                <div>
                <h4 className="font-semibold text-lg text-gray-900">Youth Participation</h4>
                <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Mobilizing and equipping young people to engage in policy making and development process.
                    </li>
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Building capacity through leadership training, mentorship, and advocacy programs.
                    </li>
                </ul>
                </div>

                {/* Gender Equality */}
                <div>
                <h4 className="font-semibold text-lg text-gray-900">Gender Equality</h4>
                <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Promoting women’s empowerment and leadership in climate resilience and peacebuilding.
                    </li>
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Advocating for policies and initiatives that combat gender-based violence and discrimination.
                    </li>
                </ul>
                </div>

                {/* Climate Action */}
                <div>
                <h4 className="font-semibold text-lg text-gray-900">Climate Action</h4>
                <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Driving community-led adaptation and mitigation projects.
                    </li>
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Partnering with local stakeholders to address climate-induced challenges in agriculture, energy, and water resources.
                    </li>
                </ul>
                </div>

                {/* Capacity Building */}
                <div>
                <h4 className="font-semibold text-lg text-gray-900">Capacity Building</h4>
                <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Delivering targeted training programs to strengthen community resilience.
                    </li>
                    <li className="flex items-start">
                    <span className="text-lg text-blue-900 mr-2">●</span>
                    Supporting skills development for youth and women to enhance their impact and sustainability.
                    </li>
                </ul>
                </div>
            </div>
        </div>

      </section>
    );
  };
  
  export default ObjectivesSection;
  