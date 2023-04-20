import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false)

    const from = location.state?.from.pathname || '/'
    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        setError('');
        setSuccess('');

        signIn(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            setSuccess('You are successfully logged in');
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign In</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type={show ? "text":"password"} name='password' required />
                    <p onClick={()=>{setShow(!show)}}>
                        <small>
                            {
                                show ? <span>Hide password</span> : <span>Show password</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
            {
                error &&  <p className='text-error'>{error}</p>
            }
            {
                success &&  <p className='text-success'>{success}</p>
            }
            
        </div>
    );
};

export default Login;