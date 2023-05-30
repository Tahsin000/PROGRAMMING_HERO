import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const headleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      console.log(result.user);
      Swal.fire(
        'Good job!',
        'User Login Successful',
        'success'
      )
      navigate(from, {replace: true});
    });
  };

  const headleValidateCaptcha = (e) => {
    // const use_captcha_value = captchaRef.current.value;
    const use_captcha_value = e.target.value;
    // console.log(value);
    if (validateCaptcha(use_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <>
     <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2  lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={headleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                //   ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  onBlur={headleValidateCaptcha}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p>
              {" "}
              <small>
                New Here? <Link to="/signup">Create an account</Link>
              </small>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
