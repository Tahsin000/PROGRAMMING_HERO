import React, { useEffect } from "react";
import img1 from "../../../assets/images/slider/slider (1).png";
import img2 from "../../../assets/images/slider/slider (2).png";
import img3 from "../../../assets/images/slider/slider (3).png";
import img4 from "../../../assets/images/slider/slider (4).png";
import img5 from "../../../assets/images/slider/slider (5).png";


const Hero = () => {

  const sliderItem = (
    <div className="absolute rounded-xl flex items-center w-full h-full left-0 top-0 bg-gradient-to-t from-[#fff] to-[rgba(21, 21, 21, 0)]">
      <div className="md:space-y-7 md:pl-12 md:w-1/2 max-md:p-5 text-[#47237e]">
        <h1 data-aos="fade-up" data-aos-duration="300" className="md:text-6xl font-bold text-xl">
          Welcome to <span className="text-[#301755]">ToY </span>
          <span className="text-[#DB2458]">House</span>
        </h1>
        <p className="max-md:text-[0.8rem] text-xl" data-aos="fade-up" data-aos-duration="400">
          Discover a world of toys and fun
        </p>
        <div className="flex md:gap-5 max-md:my-3 " data-aos="fade-up" data-aos-duration="500">
          <a href="#category" className="btn border-0 bg-[#DB2458] hover:bg-[#a61c43]">
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative md:h-[800px] h-[580px] w-full"
      >
        <img src={img1} className="w-full rounded-xl" />
        {sliderItem}

        <div className="absolute flex justify-end transform -translate-y-1/2 md:right-[50%] right-4 bottom-0 gap-3">
          <a
            href="#slide4"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative md:h-[800px] h-[580px] w-full"
      >
        <img src={img2} className="w-full rounded-xl" />
        {sliderItem}

        <div className="absolute flex justify-end transform -translate-y-1/2 md:right-[50%] right-4 bottom-0 gap-3">
          <a
            href="#slide1"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative md:h-[800px] h-[580px] w-full"
      >
        <img src={img3} className="w-full rounded-xl" />
        {sliderItem}

        <div className="absolute flex justify-end transform -translate-y-1/2 md:right-[50%] right-4 bottom-0 gap-3">
          <a
            href="#slide2"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative md:h-[800px] h-[580px] w-full"
      >
        <img src={img4} className="w-full rounded-xl" />
        {sliderItem}

        <div className="absolute flex justify-end transform -translate-y-1/2 md:right-[50%] right-4 bottom-0 gap-3">
          <a
            href="#slide3"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-outline btn-secondary"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
