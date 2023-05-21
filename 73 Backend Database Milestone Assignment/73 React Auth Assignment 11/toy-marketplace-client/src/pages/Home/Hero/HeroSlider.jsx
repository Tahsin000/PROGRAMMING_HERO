import React from "react";

const HeroSlider = ({img}) => {
  return (
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
