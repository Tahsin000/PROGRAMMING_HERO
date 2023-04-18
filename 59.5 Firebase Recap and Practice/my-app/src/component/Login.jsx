import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';
import {GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();
    ;

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();
    const handleGoogleClick = (event) =>{
        event.preventDefault();
        signInWithPopup(auth, GoogleProvider)
        .then(result =>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            setSuccess('login has been successfully completed');
            setError('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            setSuccess('');
        })
    }
    const handleGithubClick = (event)=>{
        event.preventDefault();
        signInWithPopup(auth, GithubProvider)
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            setSuccess('login has been successfully completed');
            setError('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            setSuccess('');
        })
    }
    const handleTwitterClick = (event)=>{
        event.preventDefault();
        signInWithPopup(auth, TwitterProvider)
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            setSuccess('login has been successfully completed');
            setError('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            setSuccess('');
        })
    }
    const FormLogin = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const LoggedUser = result.user;
            if (!LoggedUser.emailVerified){
                setError('Email is not verifying')
                setSuccess('');
            } else {
                setSuccess('login has been successfully completed')
                setError('');
                event.target.reset();
            }
        })
        .catch(error=>{
            console.log(error.message);
            
            if ("Firebase: Error (auth/wrong-password)." === error.message) setError("Username and Password do not match");
            else if(error.message.length > 20)setError(error.message.slice(0, 61));
        })
    }

    const handleResetPassword = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        if (!email){
            setError('Please provide your email address to reset password');
            setSuccess('');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            setSuccess("please check your email");
            setError('');
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
            setSuccess('');
        })
    }
    
    return (
        <div>
            <div className=" h-screen flex justify-center items-center flex-col">
                <h1 className='uppercase text-5xl font-bold'>Mini <span className='text-[#FFC600]'>Shop</span></h1>
                <h1 className='uppercase text-xl font-normal mt-4'>Login</h1>
                
                <form onSubmit={FormLogin} className='px-9 flex justify-center flex-wrap gap-4 flex-col mt-9'>
                    <input ref={emailRef} required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="email" type="email" id='email' placeholder='Enter email i’d' />
                    <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="password" type="password" id='password' placeholder='Enter password' />
                    <p><button onClick={handleResetPassword}>Forget Password ?</button></p>
                    {
                        error && 
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    }
                    {
                        success && 
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{success}</span>
                        </div>
                    }
                    <button className='bg-[#FFC600] text-[1.25rem] font-medium p-[0.85rem] rounded-lg'>Login</button>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <span className="absolute px-3 text-[0.9em] font-light text-gray-900 -translate-x-1/2 bg-white left-1/2">Or sign up with</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={handleGoogleClick} className='py-4 px-2 items-center border-2 flex justify-center rounded-lg'>
                            <img src="Google.svg" alt="" />
                        </button>

                        <button onClick={handleTwitterClick} className='py-4 px-2 items-center border-2 flex justify-center rounded-lg'>
                            <img src="Twitter.svg" alt="" />
                        </button>

                        <button onClick={handleGithubClick} className='py-4 px-2 items-center border-2 flex justify-center rounded-lg'>
                            <img src="Github.svg" alt="" />
                        </button>
                    </div>
                    <p className='text-[#636363] mt-3'>Not register yet ? <Link to="/register" className='text-[#0C1F22] font-[700]'>Create Account</Link> </p>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Login;