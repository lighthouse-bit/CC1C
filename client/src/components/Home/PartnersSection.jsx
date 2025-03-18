import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.JPG";
import partner4 from "../../assets/partner4.jpg";

const partners = [
  {
      image: partner1, 
      url: "programs/girls-leadership"
    },
    {
      image: partner2,
      url: "programs/skills-development"
    },
    
    {
      image: partner4,
      url: "programs/climate-action"
    },
    ];


const PartnersSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
        OUR PARTNERS AND COLLABORATORS
      </h2>

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
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center px-4 pb-16 items-center">
            <div className="bg-white rounded-lg shadow-lg h-[200px] w-[200px] flex justify-center items-center">
              <img src={partner.image}  className="w-[200] h-[200] object-cover" />
            </div>
          </SwiperSlide>

        ))}

      </Swiper>
     
    </div>
  );
};

export default PartnersSection;
