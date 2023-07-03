import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
  const {googleSignIn, gitHubSignIn} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const GoogleSignUp = ()=>{
      googleSignIn()
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser)
        const saveUser = {name: LoggedUser.displayName, email: LoggedUser.email, photoUrl: LoggedUser.photoURL, role:"student" }

        fetch(`https://summer-camp-server-ten-iota.vercel.app/users`, {
            method:"POST",
            headers: {
              "content-type":"application/json"
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                  navigate(from, { replace: true });
            });


      })
      .catch(error => console.log(error.message));
    }
    const GitHubSignUp = ()=>{
      gitHubSignIn()
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser)
        const saveUser = {name: LoggedUser.displayName, email: LoggedUser.email, photoUrl: LoggedUser.photoURL, role:"student" }

        fetch(`https://summer-camp-server-ten-iota.vercel.app/users`, {
            method:"POST",
            headers: {
              "content-type":"application/json"
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                  navigate(from, { replace: true });
            });

      })
      .catch(error => console.log(error.message));
    }
    return (
        <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={GoogleSignUp}
          className="btn-secondary-outline"
          type="button"
        >
          <FaGoogle className="" />
        </button>
        <button
        onClick={GitHubSignUp}
         className="btn-secondary-outline"
          type="button"
        >
          <FaGithub  />
        </button>
      </div>
    );
};

export default SocialLogin;