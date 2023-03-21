import React, { useEffect, useState } from "react";

function DisplayCountries(){
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    const style = {
        display:"grid",
        gridTemplateColumns: "repeat(3, 2fr)",
        gridGap:"20px"
    }
    return (
        <>
            <h1>Visiting Every Country of the world</h1>
            <h3>Available Countries: {countries.length}</h3>
            <div style={style}>
            {
                countries.map(country => <DisplayCountriesInfo flags={country.flags.png}  name={country.name.common} population={country.population}></DisplayCountriesInfo> )
            }
            </div>
        </>
    );
}

function DisplayCountriesInfo(props){
    
    const BgColor = {
        backgroundColor:"gray",
        color:"white",
        borderRadius:"10px",
        padding:"20px",
        margin:"2x",
    }
    
    return (
        <div style={BgColor}>
            <h3>Name: {props.name}</h3>
            <img src={props.flags} alt="" />
            <p>Population: {props.population}</p>
        </div>
    );
}

export default DisplayCountries;