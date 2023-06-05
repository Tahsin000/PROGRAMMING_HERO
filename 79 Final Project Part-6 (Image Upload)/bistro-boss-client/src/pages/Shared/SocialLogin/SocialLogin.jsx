import React, { useContext } from 'react';
import {FaGoogle} from "react-icons/fa"
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
        
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const LoggedUser = result.user;
            console.log(LoggedUser);

            const saveUser = {name: LoggedUser.displayName, email: LoggedUser.email }

            fetch(`http://localhost:5000/users`, {
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
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w--full text-center my-3">
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'> <FaGoogle /> </button>
            </div>
        </div>
    );
};

export default SocialLogin;