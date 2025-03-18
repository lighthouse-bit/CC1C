import React from "react";

import gl from "../../assets/gl.jpg"
import sjc from "../../assets/sjc.jpeg"
import yps from "../../assets/yps.JPG"
import ca from "../../assets/ca.jpg"
import sff from "../../assets/sf.jpg"



const ProgramsSection = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900">PROGRAMS</h2>
        <hr className="my-2 border-gray-300" />
  
        {/* ADVANCING WOMEN AND GIRLS IN CLIMATE RESILIENCE */}
        <h3 className="text-lg font-semibold text-blue-900 mt-4">
        GIRLS LEADERSHIP AND EMPOWERMENT
        </h3>
  
        {/* Image Grid */}
        <img src={gl} alt="Team working together"  className="w-full h-[500px] rounded-lg mt-6"/>
        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed">
        We believe in the power of girls to drive change in society. Our Girls’ Leadership and Empowerment Program provides mentorship, skills training, and leadership development opportunities to equip young girls with the confidence and knowledge they need to thrive. We create safe spaces for adolescent girls to express themselves, access education, and develop essential life skills. Through workshops, advocacy, and mentorship, we are nurturing the next generation of female leaders who will challenge gender inequalities and break barriers in their communities.

        </p>
  
      




        {/* YOUTH LEADERSHIP IN CLIMATE ACTION AND PEACE BUILDING */}
        <h3 className="text-lg font-semibold text-blue-900 mt-4">
        SKILLS DEVELPEMENT & JOB CREATION
        </h3>
  
        {/* Image Grid */}
        <img src={sjc} alt="Team working together"  className="w-full h-[500px] rounded-lg mt-6"/>
  
        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed">
        Unemployment remains a major challenge for young people. Our Skills Development and Job Creation Program provides vocational training, entrepreneurship coaching, and career development support to help youth secure meaningful employment or start their own businesses. We offer practical training in various fields such as tailoring, ICT, agribusiness, and craftsmanship. By equipping young people with marketable skills, we aim to reduce poverty, promote economic independence, and foster self-reliance.
        </p>
  
     



        {/* LOCAL CONFERENCE OF YOUTH (LCOY) IN FREETOWN */}
        <h3 className="text-lg font-semibold text-blue-900 mt-4">
        YOUTH, PEACE AND SECURITY
        </h3>
  
        {/* Image Grid */}
        <img src={yps} alt="Team working together"  className="w-full h-[500px] rounded-lg mt-6"/>
  
        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed">
        Young people play a crucial role in peacebuilding and conflict resolution. Our Youth, Peace, and Security Program empowers young individuals to become agents of peace and stability in their communities. Through dialogue, leadership training, and conflict resolution workshops, we equip youth with the skills to address social tensions, advocate for peace, and prevent violence. We work closely with local leaders and organizations to promote social cohesion and ensure that young voices are included in decision-making processes for sustainable peace.

        </p>
  
       


        {/* YOUTH VIRTUAL CONSULTATIONS FOR SIERRA LEONE- NATIONAL YOUTH STATEMENT (NYS) */}
        <h3 className="text-lg font-semibold text-blue-900 mt-4">
        CLIMATE ACTION AND ADVOCACY
        </h3>
  
        {/* Image Grid */}
        <img src={ca} alt="Team working together"  className="w-full h-[500px] rounded-lg mt-6"/>
  
        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed">
        Climate change is one of the biggest challenges of our time, and CCIS is at the forefront of advocacy efforts to combat its impact. We engage communities, policymakers, and stakeholders to promote sustainable environmental practices and climate resilience. Through education, awareness campaigns, and action-oriented initiatives, we empower individuals to take a stand against environmental degradation. Our advocacy includes tree planting, waste management, renewable energy promotion, and climate policy engagement to ensure a greener and more sustainable future.

        </p>
  
        



        {/* AFFORESTATION PROJECT IN KAMBIA */}
        <h3 className="text-lg font-semibold text-blue-900 mt-4">
          SUSTAINABLE FARMING
        </h3>
  
        {/* Image Grid */}
        <img src={sff} alt="Team working together"  className="w-full h-[500px] rounded-lg mt-6"/>
  
        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed">
        Agriculture remains a crucial sector for economic growth and food security. Our Sustainable Farming Program promotes climate-smart agricultural practices that enhance productivity while protecting the environment. We provide training on organic farming, agroforestry, soil conservation, and sustainable water management. By supporting small-scale farmers, especially women and youth, we aim to improve livelihoods, boost food production, and reduce the effects of climate change on agriculture.

        </p>
  
       

      </div>
    );
  };
  
  export default ProgramsSection;
  