import React, { Component } from "react";

class Product extends Component{
    render(){
        return (
            <div className="products">
                <h3>Product : {this.props.name}</h3>
                <p>Product : {this.props.price}</p>
            </div >
        );
    }
}

export default Product;



