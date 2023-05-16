import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { SingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);

        SingIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
        })
        .then(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2  max-lg:hidden">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            
                            <h1 className="text-3xl text-center font-bold">Sign In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password'  className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit"  className="btn btn-primary" value="Login"/>
                            </div>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Car Doctors <Link to="/signup" className='text-orange-600 font-bold' >Sign Up</Link> </p>
                    <SocialLogin  />
                </div>
            </div>
        </div>
    );
};

export default Login;