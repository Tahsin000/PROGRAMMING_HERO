import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, srtCart] = useState([]);

    const hendleAddToCart = (tshirt) =>{
        const newCart = [...cart, tshirt];
        srtCart(newCart);
    }

    const hendleRemoveToCart = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        srtCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
                tshirts.map(tshirt => <TShirt 
                    key={TShirt._id}
                    tshirt={tshirt}
                    hendleAddToCart={hendleAddToCart}
                    ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                hendleRemoveToCart={hendleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;