import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link  to="/"  style={{"padding":"0 2rem"}}>Home</Link>
            <Link to="/login"  style={{"padding":"0 2rem"}}>Login</Link>
            <Link to="/recap"  style={{"padding":"0 2rem"}}>Login Recap</Link>
        </div>
    );
};

export default Header;