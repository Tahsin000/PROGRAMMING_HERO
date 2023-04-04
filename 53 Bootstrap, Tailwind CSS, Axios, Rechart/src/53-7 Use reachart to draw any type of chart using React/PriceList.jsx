import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard';
import Dashboard from './Dashboard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    }, []);
    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300'>Awesome Price</h2>
            <div className="grid md:grid-cols-3 gap-3">
            {
                prices.map(price => <PriceCard key={price.id} price={price} ></PriceCard>)
            }
            </div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default PriceList;