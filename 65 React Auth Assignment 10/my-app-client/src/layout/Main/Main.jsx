import {React, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';

const Main = () => {

    const {loading} = useContext(AuthContext);
    
    if (loading){
        return <div className='h-screen flex justify-center items-center'> <img className='w-[15rem]' src="loader.gif" alt="" /> </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;