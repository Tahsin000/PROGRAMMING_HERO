import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate, Navigate  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const emailRef = useRef();

    const {user, GoogleSignIn, GitHubSignIn, SignInEmainPassword, ForgotEmailPassword} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleClick = (event) =>{
        event.preventDefault();
        GoogleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch((error)=>{console.log(error.message)})
    }
    const handleGithubClick = (event)=>{
        event.preventDefault();
        GitHubSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch((error)=>{console.log(error.message)})
    }
    const FormLogin = (event)=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        SignInEmainPassword(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            setSuccess('login has been successfully completed')
            setError('');
            event.target.reset();
            // <Navigate to={from} replace={true} />
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error.message);
            setSuccess('');
            setError('Username and Password do not-found')
        })
    }

    const handleResetPassword = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        if (!email){
            setError('Provide your email address to reset password');
            setSuccess('');
            return;
        }
        ForgotEmailPassword(email)
        .then(() =>{
            setSuccess("Please check your email");
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
                <h1 className='uppercase text-2xl font-normal mt-4'>Login</h1>
                
                <form onSubmit={FormLogin} className='px-9 flex justify-center flex-wrap gap-4 flex-col mt-9'>
                    <input ref={emailRef} required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="email" type="email" id='email' placeholder='Enter email i’d' />
                    <div className="relative">
                        <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="password" type={show?"text":"password"} id='password' placeholder='Enter password' />
                        
                        {
                            show ? <FaEyeSlash onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEyeSlash> : <FaEye onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEye> 

                        }
                    </div>
                    
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
                    <button className='bg-[#727762] text-white text-[1.25rem] font-medium p-[0.85rem] rounded-lg drop-shadow-md'>Login</button>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <span className="absolute px-3 text-[0.9em] font-light text-gray-900 -translate-x-1/2 bg-white left-1/2">Or sign up with</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={handleGoogleClick} className='py-4 px-2 items-center border-2 flex justify-center rounded-lg'>
                            <img src="Google.svg" alt="" />
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