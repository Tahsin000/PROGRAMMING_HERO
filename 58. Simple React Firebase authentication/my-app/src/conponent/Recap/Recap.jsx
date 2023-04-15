import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';

const Recap = () => {
    const [user, setUser] = useState(null); 
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider;

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, GoogleProvider)
        .then(result =>{
            const SignUser = result.user;
            console.log(SignUser);
            setUser(SignUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div style={{"marginTop":"2rem"}}>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Recap;