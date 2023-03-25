import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { DeletShoppingCart } from '../utilitie/fakeDB';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=>{
        const url = 'data.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setCosmetics(data));
    },[]);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <button onClick={DeletShoppingCart}>Delete All</button>
            {   
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id} ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;