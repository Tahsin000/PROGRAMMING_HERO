import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToCart, getShoppingCart } from '../Utilities/Utilities';

import './Products.css'

const Products = () => {
    const [foodItems, setFoodItem] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const url = '../../../public/foods.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setFoodItem(data.meals));
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedFood = foodItems.find(food => food.idMeal === id)
            if (addedFood){
                const quentity = storedCart[id];
                addedFood.quentity = quentity;
                saveCart.push(addedFood)
            }
        }
        setCart(saveCart);
    }, [foodItems])
    

    const eventHandler = (food) =>{
        const newCart = [...cart, food];
        addToCart(food.idMeal);
        setCart(newCart);
    }

    return (
        <div>
            <div className="row">
                <div className="col-xl-8 p-3 order-2 order-xl-1">
                    <div class="row row-cols-1 row-cols-xl-3 g-4">
                        {
                            foodItems.map(food => <Product kry={food.idMeal} foods={food} eventHandler={eventHandler}></Product>)
                        }
                    </div>
                </div>
                <div className="col-xl-4 order-1 p-3">
                    <div className=""> {/* border border-2 */}
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;