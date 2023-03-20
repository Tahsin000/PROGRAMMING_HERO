import React, { Component } from "react";

class Music extends Component {
    singer = {name: "Dr. Mahfuz", job: "singer"};
    singer2 = {name: "Eva Rahman", job: "singer"};
    style = {
        color:"white",
        backgroundColor:"gray",
        padding:"20px",
    }
    render(){
        return(
            <>
                <p style={this.style}>Name: {this.singer.name}, Job: {this.singer.job}</p>
                <p>Name: {this.singer2.name}, Job: {this.singer2.job}</p>
            </>
        );
    }
}
export default Music;