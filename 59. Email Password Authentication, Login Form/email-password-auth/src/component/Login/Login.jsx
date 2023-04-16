import React, { useRef, useState } from 'react';
import app from '../../firebase.init/firebase.init';
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log( email, password);
        setError('');
        setSuccess('');
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser);
            if (!(LoggedUser.emailVerified)){
                setError('Email is not verifying')
            }
            else {
                setSuccess('User Login Successful.')
                setError('');
            }

        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    };

    const handleResetPassword = (event) =>{
        const email = emailRef.current.value;
        console.log(emailRef.current.value);
        if (!email){
            alert('please provide your email address to reset password');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            alert("please check your email");
            setError('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div>
        <form onSubmit={handleLogin} className="container mt-4">
            <h2 className="text-center mb-3">Please Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                name='email'
                ref={emailRef}
                type="email"
                className="form-control"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                name='password'
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                />
            </div>
            <p><small>Forget Password? please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? <Link to="/registerbs">Register</Link></small></p>
            {
                error && <p className='alert alert-danger'>{error}</p>
            }
            {
                success && <p className='alert alert-success'>{success}</p>
            }
            <button type="submit" className="btn btn-primary" >
                Login
            </button>
        </form>
        </div>
    );
};

export default Login;