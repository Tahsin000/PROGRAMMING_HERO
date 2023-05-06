import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import restaurants1 from '/restaurants/restaurants1.jpg'
import restaurants2 from '/restaurants/restaurants2.jpg'
import restaurants3 from '/restaurants/restaurants3.jpg'
import HeroCard from './HeroCard';

const HeroSection = () => {
    return (
        <div className='w-full'>
            <Swiper style={{
                "--swiper-pagination-color": "#727762",
                "--swiper-navigation-color": "#727762",
            }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <HeroCard _img={restaurants1}></HeroCard> </SwiperSlide>
                <SwiperSlide> <HeroCard _img={restaurants2}></HeroCard> </SwiperSlide>
                <SwiperSlide> <HeroCard _img={restaurants3}></HeroCard> </SwiperSlide>
                {/* <SwiperSlide> <img src={restaurants2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={restaurants3} alt="" /> </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default HeroSection;