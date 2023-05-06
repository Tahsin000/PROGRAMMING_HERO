import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../firebase/firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
    

    const auth = getAuth(app);
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
        return signOut(auth)
    }
    // ============Google Auth===============
    const GoogleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    // ============Github Auth===============
    const GitHubSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, GitHubProvider);
    }
    // ============Email And Password Auth===============
    const SignInEmainPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ============Forgot Email And Password===============
    const ForgotEmailPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const userInfo = {
        user,
        UserSignup,
        loading,
        profileUpdate,
        logOut,
        GoogleSignIn,
        GitHubSignIn,
        SignInEmainPassword,
        ForgotEmailPassword,
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
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;