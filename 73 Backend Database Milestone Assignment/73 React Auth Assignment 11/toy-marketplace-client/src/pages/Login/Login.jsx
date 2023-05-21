import React, { useContext, useRef, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from "react-icons/fa";


const Login = () => {
  const { SingIn, GoogleSignIn, GithubSignIn, forgetPassword, titleChange } = useContext(AuthContext);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const userEmail = useRef();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  titleChange('Login');

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SingIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      console.log(from);
      navigate(from, {replace:true});
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  const handleGoogleLogin = () => {
    GoogleSignIn()
    .then(()=>{
      navigate(from, {replace:true});
    })
    .catch(()=>{})
  };

  const handleGithubLogin = () => {
    GithubSignIn()
    .then(()=>{
      navigate(from, {replace:true});
    })
    .catch(()=>{})
  };

  const handleForgotPin = (e)=>{
    e.preventDefault();
    const email = userEmail.current.value;
    forgetPassword(email)
    .then(()=>{
      Swal.fire({
        confirmButtonColor:'#DB2458',
        icon: 'info',
        title: 'Email Send Successful',
        text: 'Check Your Email',
      })
    })
    .catch((error) => {
      setError(error.message);
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl my-3 text-center font-bold">SIGN IN</h2>

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              ref={userEmail}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="relative">
              <input
                type={show?"text":"password"}
                name="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
                {
                    show ? <FaEyeSlash onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEyeSlash> : <FaEye onClick={()=> setShow(!show)} className='absolute top-3 right-4 text-[1.5rem] text-[#504d4d]'></FaEye> 
                }
            </div>
          {
            error && 
            <p className={`text-center text-red-600`}>
              <small>{error}</small>
            </p>
          }
          <button onClick={handleForgotPin} href="#" className="text-[#DB2458] hover:text-[#1a0d2f] text-sm my-3">
            Forgot Password?
          </button>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-[#DB2458] hover:bg-[#b11d47] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <hr className="my-6" />
          <div className="flex items-center justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <FaGithub />
            </button>
          </div>
          <p className="my-4 text-center">
            New to ToY House{" "}
            <Link to="/signup" className="text-[#DB2458] font-bold">
              Sign Up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
