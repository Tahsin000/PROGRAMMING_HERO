import React, { Component } from "react";

class Friend extends Component{
    info = {
        name: "Ajay Devgun",
        job: "maramari"
    }
    render(){
        return(
            <>
            <h3>Name: {this.info.name}</h3>
            <p>job: {this.info.job}</p>
            </>
        );
    }
}
export default Friend;


