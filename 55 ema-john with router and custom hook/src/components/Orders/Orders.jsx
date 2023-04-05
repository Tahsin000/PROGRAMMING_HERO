import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savecart = useLoaderData();
    const [cart, setCart] = useState(savecart);
    
    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className="shop-container">
                <div className="review-container">
                    {
                        cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart 
                    cart={cart}
                    handleClearCart={handleClearCart}
                    >
                        <Link to="/checkout">
                            <button className='btn-proceed'>
                                Proceed Checkout
                                <FontAwesomeIcon icon={faCreditCard} />
                                </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;