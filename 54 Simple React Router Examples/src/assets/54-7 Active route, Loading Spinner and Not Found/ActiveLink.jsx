import React from 'react';
import { NavLink } from 'react-router-dom';
import './Active.css'

const ActiveLink = ({to, Children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : "" }
            >
            {/* other code */}
            {Children}
        </NavLink>
    );
};

export default ActiveLink;