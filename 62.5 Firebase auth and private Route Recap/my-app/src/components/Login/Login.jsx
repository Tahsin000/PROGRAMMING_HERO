/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';



const Login = () => {
    const {GoogleSiginPopup,SignIn, forgotPassword, logOut} = useContext(AuthContext);
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [warning, setWarning] = useState('');
    const [show, setShow] = useState(false);
    const emailRef = useRef();

    // location setup 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const HandleSignIn = (event) =>{
        setError('');
        setSuccess('');
        setWarning('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)
        SignIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            if (!result.user.emailVerified){
                logOut();
                setWarning('Email is not Verified')

            } else {
                setSuccess('Login has been successful')
                console.log(loggedUser)
                form.reset();
                navigate(from, {replace:true})
            }
        })
        .catch((error)=>{
            setError(error.message)
            console.log(error)
        });

    }
    const HandleForgetPassword = () =>{
        setError('');
        setWarning('');
        setWarning('');
        const email = emailRef.current.value;
        if (email){
            forgotPassword(email)
            .then(()=>{})
            .catch((error)=>console.log(error))
            setWarning('password reset request sent to your mail')
        } else {
            setError('Please provide your email')
        }
    }
    const handleGoogleSignIn = (event) =>{
        event.preventDefault();
        GoogleSiginPopup()
        .then(()=>{})
        .catch((error)=>{console.log(error.message)})
    }
    const handleGithubSignIn = (event)=>{
        event.preventDefault();
    }
    const VerificationEmail = ()=>{
        
    }
    return (
        <div className="dark:bg-gray-900 h-screen flex flex-col justify-center">
            <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="HHJN.svg" alt="logo"/>
                    HHJN    
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={HandleSignIn} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type={show?"text":"password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input onClick={()=>setShow(!show)} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm" >
                                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a onClick={HandleForgetPassword} href="#" className="text-sm font-medium text-sky-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <p className='text-red-500 text-center'>
                                {
                                    error && <small>{error}</small>
                                }
                            </p>
                            <p className='text-yellow-400 text-center'>
                                {
                                    warning && <small>{warning}</small>
                                }
                            </p>
                            <p className='text-green-400 text-center'>
                                {
                                    success && <small>{success}</small>
                                }
                            </p>
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                            <div className="flex justify-center flex-wrap gap-3">
                                <button onClick={handleGoogleSignIn} className='text-white p-3 border rounded-lg'> <FaGoogle></FaGoogle> </button>
                                <button onClick={handleGithubSignIn} className='text-white p-3 border rounded-lg'> <FaGithub></FaGithub> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Login;