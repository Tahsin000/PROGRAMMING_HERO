import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';
const Hader = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Hader;