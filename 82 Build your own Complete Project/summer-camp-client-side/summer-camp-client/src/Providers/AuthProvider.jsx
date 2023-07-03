import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../assets/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const discountPrice = 80 ; // how many discount in the product percentage

  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const gitHubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const discount = (price) =>{
    const percentage = discountPrice / 100;
    return price - (price * percentage);
  }

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      console.log("current user", currenUser);
      if (currenUser){
        axios.post('https://summer-camp-server-ten-iota.vercel.app/jwt', {email: currenUser?.email})
        .then(data => {
          // console.log(data.data.token);
          setLoading(false);
          localStorage.setItem('access-token', data.data.token)
        })    
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const UpdateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:photo,
    })
  };

  const authInfo = {
    user,
    loading,
    discount,
    creatUser,
    LogOut,
    signIn,
    googleSignIn,
    gitHubSignIn,
    UpdateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
