import React from 'react';
import "./TShirt.css"

const TShirt = ({tshirt, hendleAddToCart}) => {
    const { price, picture, name} = tshirt;
    // console.log(_id);
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=> hendleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;