import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <nav className='header'>
            <Link  to="/"><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='text-while'>Welcome {user.email} <button onClick={handleLogout} className='btn-SignOut'>Sign out</button></span> 
                }
            </div>
        </nav>
    );
};

export default Header;