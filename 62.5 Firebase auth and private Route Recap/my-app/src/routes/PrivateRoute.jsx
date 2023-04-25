import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading){
        return <div className='absolute top-[5rem]'>Loading...</div>
    }
    if (user) return children;
    return (
        <Navigate to="/login" state={{from:location}}></Navigate>
    );
};

export default PrivateRoute;