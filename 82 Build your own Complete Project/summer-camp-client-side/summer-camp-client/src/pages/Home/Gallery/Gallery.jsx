import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

const Gallery = () => {
  const swiperOptions = {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue even on user interaction
    },
    modules: [Navigation, EffectCoverflow, Autoplay],
  };

  const sliderElement = [
    { img: "https://i.ibb.co/JjnLkZL/New-Project-9.png" },
    { img: "https://i.ibb.co/C6MYY33/New-Project-8.png" },
    { img: "https://i.ibb.co/zGhQxNb/New-Project-7.png" },
    { img: "https://i.ibb.co/4NfjbYb/New-Project-6.png" },
    { img: "https://i.ibb.co/DKmVqGY/New-Project-5.png" },
    { img: "https://i.ibb.co/n1rGJsj/New-Project-3.png" },
    { img: "https://i.ibb.co/2cTrLdP/New-Project-2.png" },
    { img: "https://i.ibb.co/PQ138gs/New-Project-14.png" },
    { img: "https://i.ibb.co/Cwvt0Lj/New-Project-13.png" },
    { img: "https://i.ibb.co/V22RbHX/New-Project-12.png" },
    { img: "https://i.ibb.co/0J315sZ/New-Project-11.png" },
    { img: "https://i.ibb.co/590wP0h/New-Project-10.png" },
  ];
  return (
    <div className="py-20">
      <SectionTitle title="Gallery" />
      <Swiper {...swiperOptions}>
        {sliderElement.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
                <img src={item.img} alt="" className="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
