import {
  GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase_config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const GithubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdated = (user, name, photo)=>{
    setLoading(true);
    return updateProfile(user, {
      displayName:name, 
      photoURL:photo
    });
  }

  const forgetPassword = (email)=>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  const titleChange = (name)=>{
    document.title = `ToY House | ${name} `
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
      // if (currentUser.email && currentUser) {
      //   const loggedUser = {
      //     email: currentUser.email,
      //   };
      //   fetch("https://car-doctor-six.vercel.app/jwt", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log("jwt response", data);
      //       // Warning: Local storage is not the best (second best place) to store access token
      //       localStorage.setItem("car-access-token", data.token);
      //     });
      // }
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    titleChange, 
    setLoading, 
    SingIn,
    GoogleSignIn,
    forgetPassword,
    GithubSignIn,
    logOut,
    profileUpdated,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
