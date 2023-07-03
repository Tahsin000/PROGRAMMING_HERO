import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Autoplay, FreeMode } from "swiper";

const OurCommunity = () => {
  const swiperOptions = {
    speed:5000,
    loop: true,
    slidesPerView:4,
        spaceBetween:30,
        freeMode:true,
    autoplay: {
      delay: 1, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue even on user interaction
    },
    modules: [ Autoplay, FreeMode],
  };

  const sliderElement = [

    {img:"https://i.ibb.co/wBBy4fm/New-Project-18.png"},
    {img:"https://i.ibb.co/qsXrNrv/New-Project-1.png"},
    {img:"https://i.ibb.co/McT74RX/New-Project-2.png"},
    {img:"https://i.ibb.co/0JzZsR3/New-Project-3.png"},
    {img:"https://i.ibb.co/Ctrn3Fm/New-Project-5.png"},
    {img:"https://i.ibb.co/yh0ZKxB/New-Project-6.png"},
    {img:"https://i.ibb.co/1fpbnX8/New-Project-7.png"},
    {img:"https://i.ibb.co/vs5dwnC/New-Project-9.png"},
    {img:"https://i.ibb.co/DC4hzGH/New-Project-10.png"},
    {img:"https://i.ibb.co/YL5THSw/New-Project-11.png"},
    {img:"https://i.ibb.co/P1NyCxt/New-Project-12.png"},
    {img:"https://i.ibb.co/TT7B4zW/New-Project-13.png"},
    {img:"https://i.ibb.co/r4PpXQF/New-Project-14.png"},
    {img:"https://i.ibb.co/zZF5VZ4/New-Project-16.png"},
    {img:"https://i.ibb.co/x60fmLs/New-Project-17.png"},
  ];
  return (
    <div className="py-20">
      <SectionTitle title="Our Community" />
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

export default OurCommunity;
