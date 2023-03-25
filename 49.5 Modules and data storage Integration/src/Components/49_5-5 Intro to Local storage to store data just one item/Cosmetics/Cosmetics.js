import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

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
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id} ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;