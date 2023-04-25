/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';


const SignIn = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const HandleSignin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        
        setError('');
        setSuccess('');
        if (password !== confirm){
            setError('Your password did not match');
            return;
        }
        else if (password.length < 8) {
            setError('Password must be 8 character or longer');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        } 
        else if (!/((?=.*[0-9].*[0-9]))/.test(password)){
            setError('Please add at least two number');
            return;
        }
        else if (!/((?=.*[!@#$%&? "]))/.test(password)){
            setError('Please add at least one special character');
            return;
        }
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser); 
            VerificationEmail(loggedUser);
            ProfileUpdate(loggedUser, name)
            setSuccess('Please Verify your email address');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
        form.reset();
    }
    const VerificationEmail = (user)=>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result);
        })
    }
    const ProfileUpdate = (user, name)=>{
        updateProfile(user, {
            displayName: name
          })
          .then(() => {})
          .catch((error) => {console.log(error.message)});
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
                            Sign up to your account
                        </h1>
                        <form onSubmit={HandleSignin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required=""/>
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" name="confirm" id="confirm" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <p className='text-red-500 text-center'>
                                {
                                    error && <small>{error}</small>
                                }
                            </p>
                            <p className='text-yellow-400 text-center'>
                                {
                                    success && <small>{success}</small>
                                }
                            </p>
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Sign up</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/login" href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Sign in</Link>
                            </p>
                        </form>
                        {/* <ToastContainer /> */}
                    </div>
                </div>
            </div>
        </section>
        <div className=""></div>
    </div>
    );
};

export default SignIn;