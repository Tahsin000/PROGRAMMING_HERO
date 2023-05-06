import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import BlogNavbar from '../../component/Blogs/BlogNavbar';
import Footer from '../../component/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';

const MainBlog = () => {
    
    const {loading} = useContext(AuthContext);
    return (
        <div>
            <BlogNavbar></BlogNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainBlog;