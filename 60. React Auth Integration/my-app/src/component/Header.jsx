import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, LogOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        LogOut()
        .then(()=>{})
        .catch(error=>{console.log(error.message)})
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth_Master</a>
                <Link className='btn btn-ghost normal-case text-xl' to="/">Home</Link>
                {
                    ! user && <Link className='btn btn-ghost normal-case text-xl' to="/login">Login</Link>

                }

                {
                    user && <Link className='btn btn-ghost normal-case text-xl' to="/profile">Profile</Link>

                }
                <Link className='btn btn-ghost normal-case text-xl' to="/orders">Orders</Link>
                {
                    !user && <Link className='btn btn-ghost normal-case text-xl' to="/register">Register</Link>
                }
                {
                    user ? 
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
                    </> : <Link to="/login">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;