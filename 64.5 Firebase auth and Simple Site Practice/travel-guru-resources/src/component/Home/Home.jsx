import React, { useRef } from 'react';
import './Home.css'
import Nav from '../Nav/Nav';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
    const myStyle = {
        "fontFamily" :"'Bebas Neue', cursive",
    }

    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    }

    return (
        <div className="container mx-auto">
            <div className='flex flex-col justify-between h-[80vh]'>
                <div className="h-full flex items-center text-white">
                    <div className="grid md:grid-cols-3 gap-5 h-[60%]">
                        <section className='flex flex-col justify-center'>
                            <h2 className="text-[6rem]" style={{fontFamily :'Bebas Neue'}}>{`Cox's bazar`}</h2>
                            <p className='text-[1rem] font-[400]' style={{fontFamily: 'Montserrat'}}>
                                {`Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...`}
                            </p>
                            <Link to='/booking' className='flex justify-center text-black gap-3 items-center p-5 bg-[#F9A51A] w-[50%] rounded-lg mt-5'>
                                <span className='text-[1rem] leading-1.25 font-[500]'>Booking</span> <FaAngleRight className='text-[1.25rem] mt-1'></FaAngleRight>
                            </Link>
                        </section>
                        <section className='text-[1rem] col-span-2  h-full'>
                            <Swiper
                                spaceBetween={25}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className="h-full " > <Card> </Card> </SwiperSlide>
                                <SwiperSlide className="h-full " > <Card> </Card> </SwiperSlide>
                                <SwiperSlide className="h-full " > <Card> </Card> </SwiperSlide>
                                <SwiperSlide className="h-full " > <Card> </Card> </SwiperSlide>
                                <SwiperSlide className="h-full " > <Card> </Card> </SwiperSlide>
                            </Swiper>
                        </section>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;