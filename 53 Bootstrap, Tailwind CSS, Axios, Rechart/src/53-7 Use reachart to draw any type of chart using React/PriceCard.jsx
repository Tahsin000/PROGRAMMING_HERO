import React from 'react';
import Features from './Features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-white'>{price.price}</span>
                <span className='text-2xl font-bold text-gray-600'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <img style={{height:"25rem", width:"100%", borderRadius:"10px"}}  src={price.picture} alt="" />
            <p className='font-bold text-white'>features</p>
            <div className="mt-3">
            {
                price.features.map((feature, i) => <Features key={i} feature={feature}></Features>)
            }
            </div>
            <button className='w-full mt-auto bg-green-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;