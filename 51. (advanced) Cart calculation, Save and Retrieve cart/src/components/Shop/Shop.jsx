import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added Product
        for (const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id===id);
            if (addedProduct){
                // step 3: add quantity
                const quentity = storedCart[id];
                addedProduct.quentity = quentity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setCart(savedCart);
    },[products]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        // let newCart = [];
        // const exists = cart.find(pd=>pd.id === product.id);
        // if (!exists){
        //     product.quentity = 1;
        //     newCart = [...cart,product];
        // } else {
        //     exists.quentity = exists.quentity + 1;
        //     const rezmaining = cart.filter(pd=>pd.id !== product.id);
        //     newCart = [...remaining, exists];
        // }

        setCart(newCart);
        addToDb(product.id)

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart} 
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;