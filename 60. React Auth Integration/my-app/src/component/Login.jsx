import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const Login = () => {
    const {signIn, GoogleSignIn} = useContext(AuthContext);

    const handelLogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser)
            event.target.reset();
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    const handleGoogleSignIn = (event)=>{
        GoogleSignIn()
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            event.target.reset();
        })
        .catch(error=>{console.log(error.message)})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link className="label-text-alt link link-hover" to="/register">
                            New to Auth_Master ? Please Register
                        </Link>
                    </form>
                    <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;