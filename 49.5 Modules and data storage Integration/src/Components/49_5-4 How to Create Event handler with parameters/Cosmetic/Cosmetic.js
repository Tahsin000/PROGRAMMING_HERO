import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    
    const addToCart =(id) =>{
        console.log('item added ',id);
    }
    return (
        <div className='cart'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;