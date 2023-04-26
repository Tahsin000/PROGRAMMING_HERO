/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getAuth } from "firebase/auth";
import React, { createContext } from 'react';
import app from '../firebase/firebase.init'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const user = null
    const auth = getAuth(app)

    const userInfo={
        user,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;