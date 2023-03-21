import React, { useEffect, useState } from "react";

function LoadCountries(){
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    return (
        <>
        <h1>Visiting Every Country of the world</h1>
        <h3>Available Countries: {countries.length}</h3>
        </>
    );
}
export default LoadCountries;