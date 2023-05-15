import React from 'react';

const FeatureCard = ({img, title}) => {

    console.log(img, title)
    return (
        <div className="card bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-bold text-[#444444]">{title}</h2>
            </div>
        </div>
    );
};

export default FeatureCard;