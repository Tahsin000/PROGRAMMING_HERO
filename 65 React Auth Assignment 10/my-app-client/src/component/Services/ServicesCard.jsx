import React from 'react';

const ServicesCard = ({data}) => {
    const {_img, _title} = data;
    return (
        <div className='relative'>
            <img className='rounded-lg shadow-xl' src={_img} alt="" />
            <h1 className='absolute md:bottom-3  text-center md:text-xl right-0 md:p-5 p-[0.125rem] text-sm bottom-0 bg-[#e1e7d1] w-full'>{_title}</h1>
        </div>
    );
};

export default ServicesCard;