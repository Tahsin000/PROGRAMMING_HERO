import React from 'react';
import { Link } from 'react-router-dom';
import '../54-3 Avoid reload using Link and Load data on route/Header.css'
// import Active from '../54-7 Active route, Loading Spinner and Not Found/Active';
// import ActiveLink from '../54-7 Active route, Loading Spinner and Not Found/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;