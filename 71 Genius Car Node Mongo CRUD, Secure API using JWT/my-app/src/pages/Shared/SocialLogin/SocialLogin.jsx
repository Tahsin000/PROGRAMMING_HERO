import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const SocialLogin = () => {
    const {GoogleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = ()=>{
        GoogleSignIn()
        .then(result =>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
            G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
