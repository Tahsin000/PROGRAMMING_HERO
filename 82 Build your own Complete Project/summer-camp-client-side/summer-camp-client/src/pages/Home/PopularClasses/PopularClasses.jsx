import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Autoplay, FreeMode } from "swiper";
import { Link } from 'react-router-dom';

const PopularClasses = ({classes}) => {
    const swiperOptions = {
        speed:5000,
        loop: true,
            spaceBetween:30,
            freeMode:true,
        autoplay: {
          delay: 1, // Set the delay between slides in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue even on user interaction
        },
        navigation:true,
        modules: [Autoplay, FreeMode],
      };

    //   const instructors = classes.filter(item => item?.role === "instructor");
    const breakpoints = {
      // For desktop view
      1200: {
        slidesPerView: 4,
      },
      // For mobile view
      800: {
        slidesPerView: 3,
      },
    };
    //   console.log(users)
    const mergedOptions = { ...swiperOptions, breakpoints };
  return (
    <div id="section-id" className="py-20">
      <SectionTitle title="Popular Classes" />
        <Swiper {...mergedOptions}>
          {classes.map((item, index) => (
            <SwiperSlide key={index}>
                {
                    
    console.log(item)
                }
              <div className="flex justify-center shadow-md ">
                <Link to="/classes" className="relative w-full rounded-md">
                    <img src={item?.image} alt="" className="w-full rounded-md" />
                    <p className=" absolute bottom-0 bg-[#004080bd] w-full text-center p-3 "> <span className="font-semibold text-[#fff]">{item?.name}</span> <br/> <span></span> </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default PopularClasses;
