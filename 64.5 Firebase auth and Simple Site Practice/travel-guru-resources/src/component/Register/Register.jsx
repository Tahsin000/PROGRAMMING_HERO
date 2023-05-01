import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const {UserSignup, profileUpdate, logOut} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSingUp = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;

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
        
        UserSignup(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            profileUpdate(LoggedUser, name, "");
            event.target.reset();
            console.log(LoggedUser);
            // logOut();
            navigate('/login')
        })
        .catch(error => {setError(error.message)})
        // console.log(name, email, password, confirm);
    }
    return (
        <div>
            <div className="container mx-auto" style={{fontFamily: 'Montserrat'}}>
                <div className='flex flex-col text-black justify-between h-[80vh]'>
                    <div className="h-full w-full flex flex-col items-center justify-center">
                    <form onSubmit={handleSingUp} className="p-[2rem] w-[30%] border-2 border-[rgba(255, 255, 255, 0.2)] h-[80%] rounded-lg">
                            <p className="text-[2rem] font-[700]" >Sign Up</p>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='name' type="text" placeholder='Name...' />
                            </div>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='email' type="email" placeholder='Username or Email' />
                            </div>
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='password' type="password" placeholder='Password...' />
                            </div>
                            
                            <div className='w-full mt-[2rem]'>
                                <input className='h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full bg-[#e6e6e689]' name='confirm' type="password" placeholder='Confirm password...' />
                            </div>
                            {
                                error && <p className="text-red-600 w-full mt-[1rem] flex justify-center"><small>{error}</small></p>
                            }
                            {
                                success && <p className="text-green-600 w-full mt-[1rem] flex justify-center"><small>{success}</small></p>
                            }
                            <div className='w-full mt-[1rem]'>
                                <button className='bg-[#F9A51A] h-[3rem] px-3 rounded-lg mt-2 text-[1rem] w-full'>Sign Up</button>
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