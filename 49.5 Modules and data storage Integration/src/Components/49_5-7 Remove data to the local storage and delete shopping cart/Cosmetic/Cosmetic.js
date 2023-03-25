import React from 'react';
import { addtoDB, removeFromDB } from '../utilitie/fakeDB';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    
    const addToCart =(id) =>{
        addtoDB(id);
    }
    const removeFromCart = id =>{
        removeFromDB(id);
    }
    return (
        <div className='cart'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p>id: ${id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;