/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({location, setLocationInfo}) => {
    const locationName = location.location;
    const locationId = location._id;
    const pathVariable =  location.img;
    const BgImgPath = `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${pathVariable})`
    const [FindLocation, setFindLocation] = useState();
    const myStyle = {
        "background":BgImgPath,
        "height": "30rem",
        "backgroundSize": "cover",
        "fontFamily": "'Bebas Neue', cursive",
        "fontSize":"2.25rem",
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/locations`)
        .then(res=>res.json())
        .then(data=>setFindLocation(data))
    }, []);

    const handleFindId = ()=>{
        const FindLocationInfo = FindLocation.find(Lid => Lid._id === locationId);
        // if (FindLocationInfo)
            setLocationInfo(FindLocationInfo);
        // console.log(FindLocation[0])
    }
    return (
        <div className='p-[0.5rem] drop-shadow-xl'>
            <Link onClick={handleFindId}  style={myStyle} className="flex items-end rounded-[1.25rem] p-[1.25rem] hover:outline-4 hover:outline-[rgb(251,188,4)] outline outline-[rgba(251,189,4,0)] text-white">
                <p>{locationName}</p>
            </Link>
        </div>
    );
};

export default Card;