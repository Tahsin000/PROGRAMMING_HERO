import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading){
        return <div className='h-screen flex justify-center items-center'> <img className='w-[15rem]' src="loader.gif" alt="" /> </div>
    }
    if (user) return children;
    return (
        <Navigate to="/login" state={{from:location}}></Navigate>
    );
};

export default PrivateRoute;