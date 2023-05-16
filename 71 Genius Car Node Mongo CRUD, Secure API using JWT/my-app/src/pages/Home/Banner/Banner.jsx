import React from 'react';

import img_1 from '../../../assets/images/banner/1.jpg'
import img_2 from '../../../assets/images/banner/2.jpg'
import img_3 from '../../../assets/images/banner/3.jpg'
import img_4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img_1} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='text-[#fff] space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img_2} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='text-[#fff] space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img_3} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='text-[#fff] space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img_4} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='text-[#fff] space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;