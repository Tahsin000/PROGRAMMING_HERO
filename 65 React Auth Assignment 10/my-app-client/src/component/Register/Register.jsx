import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEyeSlash, FaEye } from "react-icons/fa";


const Register = () => {
    const [error, setError] =useState('');
    const [success, setSuccess] =useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const {UserSignup, profileUpdate, user, logOut} = useContext(AuthContext);
    const FormRegister = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;

        setSuccess('');
        setError('');
        // console.log(name, email, password, photo);
        if (!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        } 
        else if (!/((?=.*[0-9].*[0-9]))/.test(password)){
            setError('Please add at least two number');
            return;
        }
        else if (password.length < 6){
            setError('The password is less than 6 characters');
            return;
        }
        
        UserSignup(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            profileUpdate(LoggedUser, name, photo);
            event.target.reset();
            console.log(LoggedUser);
            setSuccess('Sign Up has been Successful');
            navigate('/login', {replace:true});
            logOut();
        })
        .catch(error => {setError(error.message)})
    }
    return (
        <div>
              <div className=" h-screen flex justify-center items-center flex-col">
              <h1 className='uppercase text-2xl font-normal mt-4'>Sign Up</h1>
                
                <form onSubmit={FormRegister} className='px-9 flex justify-center flex-wrap gap-4 flex-col mt-9'>
                    <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="name" type="name" id='name' placeholder='Enter name' />
                    <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="email" type="email" id='email' placeholder='Enter email' />
                    
                    
                    <div className="relative">
                        <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="password" type={show?"text":"password"} id='password' placeholder='Enter password' />
                        
                        {
                            show ? <FaEyeSlash onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEyeSlash> : <FaEye onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEye> 

                        }
                    </div>
                    
                    {/* <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="password" type="password" id='password' placeholder='Enter password' /> */}
                    <input required className='text-[#6D6A6A] border-[1px] border-[#6D6A6A] w-[20rem] md:w-[25rem] h-[3rem] rounded-lg px-3' name="photo" type="text" placeholder='Enter photo URL' />
                    
                    {
                        error && <p> <small className='text-red-600'>{error}</small> </p> || success && <p> <small className='text-green-500'>{success}</small> </p>
                    }
                    
                    <button className='bg-[#727762] text-white text-[1.25rem] font-medium p-[0.85rem] rounded-lg drop-shadow-md'>Sign Up</button>

                    <p className='text-[#636363] mt-3'>Already have an account? <Link to="/login" className='text-[#0C1F22] font-[700]'>Log in</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;