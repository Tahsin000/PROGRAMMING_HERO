import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { creatUser, UpdateUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userUrl = `https://summer-camp-server-ten-iota.vercel.app/users`;

  const storeMongoDb = (user) => {
    const saveUser = { name: user.name, email: user.email, phone:user.phone, photoUrl: user.photoURL, address:user.address, role:"student" }
    // userInMongo.role = "student"
    console.log(user)
    axios
      .post(userUrl, saveUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onSubmit = (user) => {
    console.log(user.email, user.password, user.confirmPassword, user.name, user.PhotoUrl);

    // TODO : problem to signUP
    // _______________________________________
    if (user.password === user.confirmPassword) {
      creatUser(user.email, user.password)
        .then((result) => {
          const LoggedUser = result.user;
          console.log(LoggedUser);
          setErrorMessage("");
  
          storeMongoDb(user);
          
          UpdateUser(user.name, user.photoUrl)
            .then(() => {})
            .catch(() => {});
          reset();
  
          toast.success("Sign up successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message);
        });
    }
    else {
      setErrorMessage("The password confirmation does not match.");
    }
  


    // _______________________________________
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 md:py-20 my-5 p-5">
      <Helmet>
        <title>Sign up | Inkwell Studio</title>
      </Helmet>
      <div className="w-full md:w-2/5 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex gap-3">
            <div className="mb-4 w-full">
              <label
                className="text-gray-700 font-bold mb-2 text-sm"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`w-full px-3 py-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-[red] text-xs mt-2">Name is required</p>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                className="text-sm text-gray-700 font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`w-full px-3 py-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[red] text-xs mt-2">Email is required</p>
              )}
            </div>
          </div>
          <div className="lg:flex gap-3">
            <div className="mb-4 w-full">
              <label
                className="text-sm text-gray-700 font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`w-full px-3 py-2 border rounded ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-[red] text-xs mt-2">Password is required</p>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                className="text-sm text-gray-700 font-bold"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={`w-full px-3 py-2 border rounded ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                type="password"
                
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-[red] text-xs mt-2">
                  Confirm Password is required
                </p>
              )}
            </div>
          </div>
          <div className="lg:flex gap-3">
            <div className="mb-4 w-full">
              <label className="text-sm text-gray-700 font-bold" htmlFor="url">
                Photo URL
              </label>
              <input
                className={`w-full px-3 py-2 border rounded ${
                  errors.url ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="url"
                {...register("photoUrl")}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="text-sm text-gray-700 font-bold"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className={`w-full px-3 py-2 border rounded ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                }`}
                id="gender"
                {...register("gender", { required: true })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-[red] text-xs mt-2">Gender is required</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              className="text-sm text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className={`w-full px-3 py-2 border rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-[red] text-xs mt-2">
                Phone Number is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="text-sm text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className={`w-full px-3 py-2 border rounded ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              id="address"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <p className="text-[red] text-xs mt-2">Address is required</p>
            )}
          </div>
          <p className="text-[red] text-xs py-3 text-center">
            {errorMessage}
          </p>
          <button className="btn-primary w-full" type="submit">
            Signup
          </button>
          <div className="block text-center py-5">
            <small>
              Already Have account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </small>
          </div>
          <SocialLogin />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
