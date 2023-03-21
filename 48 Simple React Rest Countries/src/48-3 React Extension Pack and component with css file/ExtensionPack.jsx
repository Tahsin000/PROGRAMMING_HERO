import React from 'react';

import "./ExtensionPack.css"
const ExtensionPack = () => {
    return (
        <div>
            <h1>Countries in other File</h1>
        </div>
    );
};


const Person = () => {
    return (
        <div>
          <h1>This is Person Component</h1>  
            
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React website</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};


export {ExtensionPack, Person, Header};