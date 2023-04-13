import React from 'react';

const Link = ({phone}) => {
    const {_id,  brand, storage, color, price, screenSize, camera, battery} = phone;
   
    return (
        <div style={{
            "border":"1px solid gray",
            "padding":"2rem",
            "borderRadius": "2rem"
        }}>
            <h2>{brand}</h2>
            <h3>{storage}</h3>
            <div style={{"display":"flex", "flexWrap": "wrap;","gap":"2rem", "alignitems":"center","justifyContent":"center", 
                }}>
                
                <h5>{color}</h5>
                <h3>{price}</h3>
            </div>
            <a href={`/Phones/${_id}`}>
                <button>Learn More</button>
            </a>
        </div>
    );
};

export default Link;