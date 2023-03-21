import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

import "./Countries.css"
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);
    return (
        <div>
            <h1>Hello From Countries</h1>
            <h3>Available Countries: {countries.length}</h3>
            <div className="style">
            {
                countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
            }
            </div>
        </div>
    );
};


export default Countries;