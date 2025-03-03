import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.png";
import carousel6 from "../../assets/carousel6.png";

const Carousel = () => {
  const slides = [
    {
      image: carousel1,
      text: "MOBILIZING AND EQUIPPING YOUNG PEOPLE TO ENGAGE IN POLICY MAKING AND DEVELOPMENT PROCESSES",
      url: "programs/women-in-climate-resilience"
    },
    {
      image: carousel2,
      text: "Promoting women’s empowerment and leadership in climate resilience and peacebuilding",
      url: "programs/youth-leadership"
    },
    {
      image: carousel3,
      text: "Partnering with local stakeholders to address climate-induced challenges in agriculture, energy and water resources",
      url: "programs/local-conference"
    },
    {
      image: carousel4,
      text: "Supporting skill development for youth and women to enhance their impact and sustainability",
      url: "programs/affoerestation-projects"
    },
    {
      image: carousel5,
      text: "Building capacity through leadership training, mentorship and advocacy programs.",
      url: "programs/youth-consultation"
    },
    {
      image: carousel6,
      text: "Advocating for policies and initiatives that combat gender-based violence and discrimination.",
      url: "programs/leadership-program"
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
