/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css'

const Card = ({location}) => {
    const locationName = location.location;
    // const locationPicture = '../../../public/images/Sreemongol.png';
    const pathVariable =  location.img;
    const BgImgPath = `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${pathVariable})`
    const myStyle = {
        "background":BgImgPath,
        "height": "30rem",
        "backgroundSize": "cover",
        "fontFamily": "'Bebas Neue', cursive",
        "fontSize":"2.25rem",
    }
    return (
        
        <div className='p-[0.5rem] drop-shadow-xl'>
            <div style={myStyle} className="flex items-end rounded-[1.25rem] p-[1.25rem] hover:outline-4 hover:outline-[rgb(251,188,4)] outline outline-[rgba(251,189,4,0)] text-white">
                <img src={locationName} alt="" />
                <p>{locationName}</p>
            </div>
        </div>
    );
};

export default Card;