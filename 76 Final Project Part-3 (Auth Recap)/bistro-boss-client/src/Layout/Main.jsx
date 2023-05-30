import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaserFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {
                noHeaserFooter || <Navbar />
            }
            <Outlet />
            {
                noHeaserFooter || <Footer /> 
            }
        </div>
    );
};

export default Main;