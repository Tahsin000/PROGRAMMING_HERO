import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/Phones">Phones</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;