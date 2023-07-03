import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    
    const location = useLocation();
    const noHeaserFooter = location?.pathname?.includes('login') || location?.pathname?.includes('register');
    console.log(location);
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