import React from 'react';
import './District.css'
const districtStyle = {
    backgroundColor:"gray",
    padding:"5px",
    borderRadius:"10px",
    marginTop:"10px",
    color:"white",

}

const District = (props) => {
    return (
        <div style={districtStyle}>
            <h2>Name: {props.name}</h2>
            <p>Specialty: {props.special}</p>
        </div>
    );
};

export default District;