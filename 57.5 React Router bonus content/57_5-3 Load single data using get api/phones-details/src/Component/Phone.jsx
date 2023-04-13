import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    const {_id,  brand, storage, color, price, screenSize, camera, battery} = phone;

    return (
        <div 
        style={{
            "border":"1px solid gray",
            "padding":"2rem",
            "borderRadius": "2rem",
            "marginTop": "3rem"
        }}
        >
            <div >
                <h2>{brand}</h2>
                <h3>{storage}</h3>
                <div style={{"display":"flex","gap":"2rem", "alignitems":"center"}}>
                    
                    <h5>{color}</h5>
                    <h3>{price}</h3>
                </div>
                <a href={`/Phones/${_id}`}>
                    <button>Learn More</button>
                </a>
            </div>
        </div>
    );
};

export default Phone;