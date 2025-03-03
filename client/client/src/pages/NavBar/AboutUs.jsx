import React from "react";
import aboutImage from "../../assets/about_us.png";

const AboutUs = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#052F6B] mb-2">ABOUT US</h2>
      <hr />
      
      
      <div className="flex flex-col items-center mt-20">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full   rounded-lg shadow-md"
        />

        <p className="mt-6 text-gray-700 leading-relaxed text-justify md:text-center">
          The center for community impact and sustainability (CCIS) is a dynamic youth-led organization dedicated
          to empowering vulnerable communities through sustainable development initiatives. CCIS works to
          address pressing global challenges by advancing
          <span className="text-blue-600 font-semibold"> youth participation, gender equality, climate action, and capacity building.</span>
          With operations spanning multiple countries including Sierra Leone, CCIS champions innovative solutions to ensure marginalized groups – particularly women, girls, and youth – are
          at the forefront of decision-making processes and sustainable development efforts.
        </p>

      </div>
    </section>
  );
};

export default AboutUs;
