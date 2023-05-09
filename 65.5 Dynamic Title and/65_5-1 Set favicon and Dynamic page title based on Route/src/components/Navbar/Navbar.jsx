import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
    return (
        <div className='grid'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Secvices</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/googlemap">GoogleMap</Link>
        </div>
    );
};

export default Navbar;