import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const SignUp = () => {
  const {createUser, profileUpdated, user, logOut, titleChange} = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  titleChange('SignUp');

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setSuccess("");
    setError("");
    // console.log(name, email, password, photo);
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/((?=.*[0-9].*[0-9]))/.test(password)) {
      setError("Please add at least two number");
      return;
    } else if (password.length < 6) {
      setError("The password is less than 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const LoggedUser = result.user;
        profileUpdated(LoggedUser, name, photo).then(()=>{}).catch(()=>{})
        form.reset();
        console.log(LoggedUser);
        setSuccess("Sign Up has been Successful");
        navigate("/login", { replace: true });
        logOut();
        Swal.fire({
          icon: 'success',
          title: 'successful',
          text: 'Account has been create successfully!',
        })
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  const handleGithubLogin = () => {
    // Handle Github login logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl my-3 text-center font-bold">SIGN UP</h2>
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
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
          </div>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              photo
            </label>
            <input
              id="photo"
              type="photo"
              name="photo"
              placeholder="Enter your photo url"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {
            error && 
            <p className={`text-center text-red-600`}>
              <small>{error}</small>
            </p>
          }
          {
            success && 
            <p className={`text-center text-red-600`}>
              <small>{success}</small>
            </p>
          }
         
          <button
            type="submit"
            className="bg-[#DB2458] hover:bg-[#b11d47] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full my-3"
          >
            Sign In
          </button>
          <p className="my-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#DB2458] font-bold">
              Sign In
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
