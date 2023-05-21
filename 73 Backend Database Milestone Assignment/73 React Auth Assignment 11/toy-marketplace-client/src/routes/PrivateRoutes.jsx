import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading){
        return <div className='h-[70vh] flex justify-center items-center '> <button className=" btn loading">loading</button> </div>
    }
    if (user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace> { console.log(location)} </Navigate>
    
};

export default PrivateRoutes;