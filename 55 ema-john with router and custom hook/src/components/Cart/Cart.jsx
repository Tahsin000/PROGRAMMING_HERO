import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        
        total += product.price * product.quantity;
        totalShipping += product.shipping ;
        quantity = quantity + product.quantity;
    }
    
    const tax = (total * 7) / 100;
    const grandTotal = total + totalShipping + tax 

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
            <FontAwesomeIcon className='' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;