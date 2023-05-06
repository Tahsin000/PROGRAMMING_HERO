import React from 'react';
import { Navigate } from "react-router-dom";
const HeroCard = (props) => {
    const {_img} = props
    console.log(_img)
    return (
        <div>
            <div className="relative">
                <img src={_img}alt="" />
                <p  className='w-full absolute md:bottom-[35%] bottom-[10%] md:right-[-10%] bottom-0 text-white md:p-10 p-5'>
                    <h1 data-aos="fade-up" data-aos-duration='500' className='text-[1rem] font-bold md:text-6xl'>Experience the Best<br/>Flavors in Town</h1>
                    <p data-aos="fade-up" data-aos-duration='600'><small className='text-white md:text-[1rem]'>Indulge in our authentic dishes made with fresh ingredients and served with love.</small></p>
                    <a data-aos="fade-up" data-aos-duration='700' href="#servicesSection">
                        <button className='bg-transparent md:mt-5 mt-3 hover:bg-[#e4ff89] text-[#e4ff89] font-semibold hover:text-[#595e49] md:py-2 py-1 md:px-4 px-2 border border-[#e4ff89] hover:border-transparent rounded shadow-md'>
                        Our Services</button>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default HeroCard;