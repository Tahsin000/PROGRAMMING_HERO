/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const UserSignup = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate=(user, name, photo)=>{
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const Login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
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
    const forgotPassword = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    const userInfo = {
        user,
        UserSignup,
        Login,
        loading,
        profileUpdate,
        logOut,
        forgotPassword,
    }

    return (
        <AuthContext.Provider value={userInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;