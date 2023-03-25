import React from 'react';
import { addtoDB } from '../utilitie/fakeDB';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    
    const addToCart =(id) =>{
        const quantity = localStorage.getItem(id);
        if(quantity){
            const newQuentity = parseInt(quantity) + 1;
            localStorage.setItem(id, newQuentity);
        } else {
            addtoDB(id);
        }
        
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