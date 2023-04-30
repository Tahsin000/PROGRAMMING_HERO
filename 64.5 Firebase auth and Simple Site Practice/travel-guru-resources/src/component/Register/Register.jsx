import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="container mx-auto" style={{fontFamily: 'Montserrat'}}>
                <div className='flex flex-col text-black justify-between h-[80vh]'>
                    <div className="h-full w-full flex flex-col items-center justify-center">
                    <form className="p-[2rem] w-[30%] border-2 border-[rgba(255, 255, 255, 0.2)] h-[80%] rounded-lg">
                            <p className="text-[2rem] font-[700]" >Register</p>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='name' type="text" placeholder='Name...' />
                            </div>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='email' type="text" placeholder='Username or Email' />
                            </div>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='password' type="password" placeholder='Password...' />
                            </div>
                            
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='confirm' type="password" placeholder='Confirm password...' />
                            </div>
                            
                            <div className='w-full mt-[2rem]'>
                                <button className='bg-[#F9A51A] h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full'>Login</button>
                            </div>
                            <p className="w-full mt-[1rem] flex justify-center">
                                <small>{`already have an account?`} <Link to='/login' className='text-[#F9A51A]'> Login</Link></small>
                            </p>
                           
                        </form>        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;