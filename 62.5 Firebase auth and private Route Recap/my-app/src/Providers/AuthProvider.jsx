/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.inti'

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const Googleprovider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const GoogleSiginPopup=()=>{
        return signInWithPopup (auth, Googleprovider);
    }

    const SignIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
        return signOut(auth)
    }

    const forgotPassword =(email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        GoogleSiginPopup,
        SignIn,
        logOut,
        forgotPassword ,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};