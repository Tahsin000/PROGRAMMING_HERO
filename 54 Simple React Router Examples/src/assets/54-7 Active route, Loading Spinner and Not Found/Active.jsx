import React, { Children } from 'react';
import './Active.css'
import { NavLink } from 'react-router-dom';

const Active = ({to, Children}) => {
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

export default Active;