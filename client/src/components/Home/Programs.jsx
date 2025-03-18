import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gl from "../../assets/gl.jpg"
import sd from "../../assets/sd.jpg"
import ps from "../../assets/ps.jpg"
import ca from "../../assets/ca.jpg"
import sff from "../../assets/sf.jpg"

const programs = [
  {
    date: "20th January 2025",
    title: "Girls leadership and empowerment",
    image: gl, 
    url: "programs/girls-leadership"
  },
  {
    date: "11th October 2024",
    title: "Skills developement & job creation",
    image: sd,
    url: "programs/skills-development"
  },
  {
    date: "14th February 2023",
    title: "Youth, peace and security",
    image: ps,
    url: "programs/youth-peace-security"
  },
  {
    date: "14th February 2023",
    title: "Climate action and advocacy",
    image: ca,
    url: "programs/climate-action"
  },
  {
    date: "14th February 2023",
    title: "Sustainable Farming",
    image: sff,
    url: "programs/sustainable-farming"
  },
  
];

const Programs = () => {
  return (
    <div className="bg-blue-900 text-white py-12 mb-20" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">PROGRAMS</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index} className="flex justify-center px-4 pb-16"
            
            >
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg max-w-sm sm:max-w-sm space-y-4">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center space-y-2">
                  <p className="text-gray-600">{program.date}</p>
                  <h3 className="font-semibold text-lg text-[#052F6B]">{program.title}</h3>
                  
                  <Link to={program.url}><button className="mt-3 text-[#052F6B80] font-semibold">Learn More</button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Programs;
