import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ServicesCard from './ServicesCard';
import { Navigation, Pagination } from 'swiper';

const Services = () => {
    const data = [
        {
            _img:"./services/_ (1).png",
            _title:"Tacos"
        },
        {
            _img:"./services/_ (2).png",
            _title:"Ceviche"
        },
        {
            _img:"./services/_ (3).png",
            _title:"Salmon Fish"
        },
        {
            _img:"./services/_ (4).png",
            _title:"Tuna Fish"
        }
    ]
    return (
        <section id='servicesSection' style={{backgroundImage:"url('./service.png')", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition: "bottom"}} className='bg-[#fbfff0] md:h-auto py-[6rem]' > 
        {/* bg-[#727762]  */}
            <div className="container mx-auto h-full py-10">
                <div className='flex flex-col justify-center text-[#1d230e] h-full gap-2'>
                    <p className='text-4xl md:text-7xl font-bold text-center' data-aos="fade-down" data-aos-duration="500">SERVICES</p>
                    <p data-aos="fade-up" data-aos-duration='500' className='md:text-lg text-justify md:mt-[5rem] mt-[2rem]'>  
                        <Swiper style={{
                            "--swiper-pagination-color": "#fff",
                            "--swiper-navigation-color": "#fff",
                        }}
                            spaceBetween={25}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            onSwiper={(swiper) => console.log(swiper)}
                            
                        >
                            {
                                data.map((dt ,k)=> <SwiperSlide key={k}> <ServicesCard data={data[k]}></ServicesCard> </SwiperSlide>)
                            }
                        </Swiper>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;