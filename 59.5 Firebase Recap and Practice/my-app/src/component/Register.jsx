import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';


const auth = getAuth(app);

const Register = () => {
    const FormRegister = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/(?=.*[A-Z])/.test(password)){
            toast.warn('Please add at least one uppercase', {
                position: "top-center",
            })
            return;
        } 
        else if (!/((?=.*[0-9].*[0-9]))/.test(password)){
            toast.warn('Please add at least two number', {
                position: "top-center",
            })
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            // Verification email
            SendUserVerification(LoggedUser);
            // set displayName update 
            updateUserData(LoggedUser, name);
            event.target.reset();

        })
    }
    const SendUserVerification = (user)=>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            toast.warn('Please Verify your email address', {
                position: "top-center",
            })
        })
    }
    const updateUserData = (LoggedUser, name)=>{
            updateProfile(LoggedUser, {
                displayName: name
            }) 
            . then(result =>{
                console.log("username updated")
            })
            .catch(error =>{
                setError(error.message);
            })
    }
    return (
        <div>
              <div className=" h-screen flex justify-center items-center flex-col">
                <h1 className='uppercase text-5xl font-bold'>Mini <span className='text-[#FFC600]'>Shop</span></h1>
                <h1 className='uppercase text-xl font-normal mt-4'>Register</h1>
                
                <form onSubmit={FormRegister} className='px-9 flex justify-center flex-wrap gap-4 flex-col mt-9'>
                    <input className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="name" type="name" id='name' placeholder='Enter name' />
                    <input className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="email" type="email" id='email' placeholder='Enter email' />
                    <input className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="password" type="password" id='password' placeholder='Enter password' />
                    <button className='bg-[#FFC600] text-[1.25rem] font-medium p-[0.85rem] rounded-lg'>Sign In</button>

                    <p className='text-[#636363] mt-3'>Already have an account? <Link to="/" className='text-[#0C1F22] font-[700]'>Log in</Link> </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;