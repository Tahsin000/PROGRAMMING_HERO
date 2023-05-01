import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {Login, forgotPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    const ref = useRef()

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');

        Login(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login has been successful');
            navigate('/')
            console.log(loggedUser);
        })
        .catch(error=>{
            setError(error.message);
            console.log(error)
        })
    }
    const handleForgot = (event) =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const email = ref.current.value;
        
        if (email){
            forgotPassword(email)
            .then(()=>{
                setSuccess('Change your password by mail');
                setError('');
            })
            .catch(error =>{
                console.log(error);
                setSuccess('');
                setError(error.message);
            })    
        } else {
            setError('Please provide your email')
        }
        // console.log(ref.current.value);
    }
    return (
        <div>
            <div className="container mx-auto" style={{fontFamily: 'Montserrat'}}>
                <div className='flex flex-col text-black justify-between h-[80vh]'>
                    <div className="h-full w-full flex flex-col items-center justify-center">
                        <form onSubmit={handleLogin} className="p-[2rem] w-[30%] border-2 border-[rgba(255, 255, 255, 0.2)] h-[70%] rounded-lg">
                            <p className="text-[2rem] font-[700]" >Sign In</p>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='email' type="text" placeholder='Username or Email' ref={ref}/>
                            </div>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='password' type="password" placeholder='Password...' />
                            </div>
                            <div className='w-full mt-[1.25rem] flex'>
                                <div className='grow flex gap-2 items-center'>
                                    <input className='' name='accept' type="checkbox" placeholder='Password...' /> <small>Remember me</small>
                                </div>
                                <button onClick={handleForgot}>
                                    <small>Forgot Password</small>
                                </button>
                            </div>
                            <p className="w-full mt-[0.7rem] flex justify-center">
                                {
                                    error &&<small className='text-red-600'>{error}</small>
                                }
                                {
                                    success &&<small className='text-green-600'>{success}</small>
                                }
                            </p>
                            <div className='w-full mt-[0.5rem]'>
                                <button className='bg-[#F9A51A] h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full'>Sign In</button>
                            </div>
                            <p className="w-full mt-[1rem] flex justify-center">
                                <small>{`Don't have account?`} <Link to='/register' className='text-[#F9A51A]'> create an account</Link></small>
                            </p>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;