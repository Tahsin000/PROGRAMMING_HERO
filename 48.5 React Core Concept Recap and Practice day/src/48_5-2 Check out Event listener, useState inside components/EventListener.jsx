import React, { useState } from 'react';

const districtStyle = {
    backgroundColor:"lightblue",
    padding:"20px",
    borderRadius:"10px",
    marginTop:"10px",

}

const EventListener = (props) => {
    const [power, setPower] = useState(1);
    const boostPower = () =>{
        const newPower = power * 2;
        setPower(newPower);
    }
    return (
        <div style={districtStyle}>
            <h2>Name: {props.name}</h2>
            <p>Specialty: {props.special}</p>
            <h4>Power: {power}</h4>
            <button onClick={boostPower}>Boost The Power</button>
        </div>
    );
};

export default EventListener;