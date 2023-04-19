import React, {createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth, GoogleProvider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("auth state change", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        GoogleSignIn,
        LogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;