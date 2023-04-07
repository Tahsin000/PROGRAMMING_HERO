import React from 'react';
import './Cart.css'

const Cart = ({cart, hendleRemoveToCart}) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add some products</p>
    } else {
        message = <div>    
            <h3>Brolox</h3>
            <p><small>Thanks for giving money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={`${(cart.length == 2) ? 'orange' : 'green'}`} >Order Summary: {cart.length}</h3>
            {message}
            {
                cart.map(tshirt => <p 
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=> hendleRemoveToCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;


/**
* CONDITIONAL RENDERING
* 1. use if or if else to set a variable that will contain an element, components
* 2. ternary operator: condition? 'for true' : 'false'
* 3. Logical &&: (if the condition is true then the next thing will be displayed)
* 4. Logical ||: (if the condition is false then the next thing will be displayed)
*
* CONDITIONAL CSS Class I
* 1. use ternary
* 2. ternary inside template string
**/

