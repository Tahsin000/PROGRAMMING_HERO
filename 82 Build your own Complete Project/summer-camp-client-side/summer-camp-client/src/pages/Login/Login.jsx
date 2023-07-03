import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const {signIn} = useAuth();
    
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [Error, setError ] = useState();

    const handleSubmit = (event) => {
      event.preventDefault(); 
      const form = event.target;
      const password = form.password.value;
      const email = form.email.value;

      if (password && email){
        const data = {
          email: email,
          password: password
        }
        console.log(data);
  
        signIn(data.email, data.password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Login Successful',
            showConfirmButton: false,
            timer: 1500
          });
          setError('');
          navigate(from, { replace: true });
        })
        .catch(err =>{
          setError(`firebase ${err?.message}`);
        });
      } else if (!email){
        setError('Email is required')
      } else {
        setError('password is required')
      }
      
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Helmet>
          <title>Sign in | Inkwell Studio</title>
        </Helmet>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-gray-700 font-semibold text-[0.80rem]" htmlFor="email">
                  Email
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded`}
                  type="email"
                  id="email"
                  name='email'
                />
                
              </div>
              <div className="mb-6">
                <label className="text-gray-700 font-semibold text-[0.80rem]" htmlFor="password">
                  Password
                </label>
                <input
                  className={`w-full px-3 py-2 border rounded `}
                  type="password"
                  id="password"
                  name='password'
                />
              </div>
                <p className="text-[red] text-xs py-3 text-center">{Error}</p>
              
              <button className="btn-primary w-full text-xs" type="submit" >Login</button>
              <div className="block text-center py-5">
                <small>Create an account! Not <Link to="/register" className="text-primary">registered</Link> ?</small>
              </div>
              <SocialLogin />
            </form>
          </div>
        </div>
      );
};

export default Login;
