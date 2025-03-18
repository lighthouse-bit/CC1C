import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gle from "../../assets/gle.jpeg"
import gl from "../../assets/gl.jpg"
import sjc from "../../assets/sjc.jpeg"
import yps from "../../assets/yps.JPG"
import caa from "../../assets/caa.jpg"
import sf from "../../assets/sf.jpeg"
import sff from "../../assets/sf.jpg"

const Carousel = () => {
  const slides = [
    {
      image: gl,
      text: "GIRLS LEADERSHIP AND EMPOWERMENT",
      url: "programs/women-in-climate-resilience"
    },
    {
      image: sjc,
      text: "SKILLS DEVELPEMENT & JOB CREATION",
      url: "programs/youth-leadership"
    },
    {
      image: yps,
      text: "YOUTH, PEACE AND SECURITY",
      url: "programs/local-conference"
    },
    {
      image: caa,
      text: "CLIMATE ACTION AND ADVOCACY",
      url: "programs/affoerestation-projects"
    },
    {
      image: sff,
      text: "SUSTAINABLE FARMING",
      url: "programs/youth-consultation"
    },
  ];

  return (
    <div className="w-full !m-0 !p-0 mb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full !m-0 !p-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[500px]">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 text-center">
                <h2 className="text-white text-center text-lg md:text-2xl font-bold">
                  {slide.text}
                </h2>
                <Link to={slide.url}>
                <button className="bg-[#052F6B] text-white mt-8 px-6 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-blue-600 transition duration-300">
                  Get Involved
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
