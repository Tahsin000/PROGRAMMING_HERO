import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Pagination, Autoplay, FreeMode } from "swiper";
import { Link } from 'react-router-dom';
const PopularInstructors = ({instructors}) => {
    const swiperOptions = {
        speed:1500,
        loop: true,
            spaceBetween:30,
            freeMode:true,
        autoplay: {
          delay: 0, // Set the delay between slides in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue even on user interaction
        },
        navigation: true,
        modules: [ Autoplay, FreeMode],
      };

      const breakpoints = {
        // For mobile view
        800: {
          slidesPerView: 3,
        },
      };
      //   console.log(users)
      const mergedOptions = { ...swiperOptions, breakpoints };
    //   console.log(users)

  return (
    <div className="py-20">
      <SectionTitle title="Popular Instructors" />
        <Swiper {...mergedOptions}>
          {instructors.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center shadow-md">
                <Link to="/instructors" className="relative w-full">
                    <img src={item.photoUrl} alt="" className="w-full " />
                    <p className=" absolute bottom-0 bg-[#004080bd] w-full text-center p-3 "> <span className="font-semibold text-[#fff]">{item.name}</span> <br/> <span></span> </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default PopularInstructors;