import React from 'react';

const CategoryJob = ({job}) => {
    const {id, img, type, Available} = job;
    console.log()
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration={id * 300}  className="bg-[#faf8ff] p-[2.5rem] rounded-md">
                <img className='h-[70px]' src={img} alt="" />
                <h2 className='text-[#474747] font-[800] text-[1.25em] mt-[2rem]'>{type}</h2>
                <p className='text-[#A3A3A3] mt-[8px]'>{Available} Jobs Available</p>
            </div>
        </div>
    );
};

export default CategoryJob;