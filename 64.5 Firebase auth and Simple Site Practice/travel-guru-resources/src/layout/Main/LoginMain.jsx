import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginNav from '../../component/Nav/LoginNav';

const LoginMain = () => {
    return (
        <div>
            <LoginNav></LoginNav>;
            <Outlet></Outlet>
        </div>
    );
};

export default LoginMain;