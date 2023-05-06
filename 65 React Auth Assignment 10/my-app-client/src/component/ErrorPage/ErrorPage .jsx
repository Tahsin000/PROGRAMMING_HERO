import React from 'react';
import BlogNavbar from '../Blogs/BlogNavbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div className=''>
            <BlogNavbar></BlogNavbar>
            <div className=" h-screen flex justify-center items-center">
                <img src="./error.png" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage ;