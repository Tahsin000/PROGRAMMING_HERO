import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, animateScroll as scroll } from 'react-scroll';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'



// import img1 from "https://i.ibb.co/rvh7MXd/cover-2.png"
// import img2 from "https://i.ibb.co/yV7TQ48/cover-3.png"
// import img3 from "https://i.ibb.co/QJpddXj/cover-4.png"
// import img4 from "https://i.ibb.co/XJzDz1j/cover-5.png"
// import img5 from "https://i.ibb.co/4s87Qwb/cover-1.png"



import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {

    const [text] = useTypewriter({
        words: ['Imagination', 'Inspiration', 'Creativity', 'Expression', 'Artistry'],
        loop: 0
    })
    const swiperOptions = {
        speed:1000,
        loop: true,
        autoplay: {
          delay: 2500, // Set the delay between slides in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue even on user interaction
        },
        modules:[Pagination, Navigation, Autoplay]
      };



    const sliderElement = [
        {
            img:"https://i.ibb.co/rvh7MXd/cover-2.png"
        },
        {
            img:"https://i.ibb.co/yV7TQ48/cover-3.png"
        },
        {
            img:"https://i.ibb.co/QJpddXj/cover-4.png"
        },
        {
            img:"https://i.ibb.co/XJzDz1j/cover-5.png"
        },
        {
            img:"https://i.ibb.co/4s87Qwb/cover-1.png"
        },
    ]
    return (
        <div className="">
          <Swiper {...swiperOptions}>
            {
                sliderElement.map((item, index) => <SwiperSlide key={index} >  
                    <div className="relative">
                        <div className="relative">
                            <img src={item.img} alt="" className="w-full" />
                            <img src="https://i.ibb.co/5T0FRJk/New-Project-1.png" alt="" className="w-full absolute bottom-0" />
                        </div>
                        <div className=" absolute md:bottom-[45%] bottom-[15%] left-[10%] text-[#fff] grid md:gap-4 gap-2" >
                            <h2 className="font-semibold md:text-5xl">Welcome to <br />Inkwell Studio! <span className="text-[#FFFF00] p-3">{text}</span>
                            </h2>
                            <p className="text-sm">Unleash Your Creative Potential with Our Artistic Journey</p>
                            <div className="md:w-1/3 w-1/2">
                                <Link 
                                    className="btn-primary-outline"
                                    to="section-id" // ID of the section you want to scroll to
                                    smooth={true} // Enable smooth scrolling
                                    duration={500} // Duration of the scrolling animation in milliseconds
                                    offset={-50}
                                >EXPLORE</Link>
                            </div>
                        </div>
                    </div>
                
                 </SwiperSlide> )
            }
          </Swiper>
        </div>
      );
};

export default Banner;
