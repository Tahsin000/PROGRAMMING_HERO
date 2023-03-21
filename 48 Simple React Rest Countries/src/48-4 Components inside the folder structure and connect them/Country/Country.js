import React from "react";
const Country = (props) =>{
    return (
        <div className='BgColor'>
            <h1>{props.name}</h1>
            <img src={props.flags} alt="" />
            <p>population: {props.population}</p>
        </div>
    );
}
export default Country;
