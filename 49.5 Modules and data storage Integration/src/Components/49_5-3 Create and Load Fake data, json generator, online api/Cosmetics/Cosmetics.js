import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    // const cosmetics = [
    //     {id:1, name:'Alta', price: 100},
    //     {id:2, name:'palis', price: 300},
    //     {id:3, name:'malis', price: 300},
    //     {id:4, name:'balis', price: 400},
    //     {id:5, name:'nalis', price: 500},
    // ]
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
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id} ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;