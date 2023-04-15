import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init'

const Login = () => {
    const [user, setUser] = useState(null) ; 

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, GoogleProvider)  
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log("error", error.message);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, GithubProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log("error", error);
            setUser(null);
        })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);

        })
        .catch(error => {
            console.log("Error : ", error.message);
        })
    }
    


    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            { 
                user && <div className="">
                    <h3>username: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;