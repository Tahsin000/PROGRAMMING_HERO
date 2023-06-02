import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

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

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      console.log("current user", currenUser);
      
      // get and set token 
      if (currenUser){
        axios.post('http://localhost:5000/jwt', {email: currenUser.email})
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
      } else {
        localStorage.removeItem('access-token');
      }
      
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
    creatUser,
    LogOut,
    signIn,
    googleSignIn,
    UpdateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
