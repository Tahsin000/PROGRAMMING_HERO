import React, { Component } from "react";
class Props extends Component{
    render (){
        return (
            <>
            <h3>Props</h3>
            <p>person Name : {this.props.name}</p>
            </>
        );
    }
}

export default Props;


