import React from 'react';
import { Outlet } from 'react-router-dom';

const MainWithLogin = () => {
    return (
        <div>
            {/* LoginNav */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainWithLogin;