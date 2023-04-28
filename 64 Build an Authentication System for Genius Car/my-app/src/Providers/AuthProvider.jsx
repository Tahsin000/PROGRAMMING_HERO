/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext } from 'react';
import app from '../firebase/firebase.init'
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate=(user, name, photo)=>{
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    // ==============
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log("Logged in user inside auth state observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        } )
        return ()=>{
            unsubscribe();    
        }
    }, [])

    const userInfo={
        user,
        createUser,
        profileUpdate,
        signIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;