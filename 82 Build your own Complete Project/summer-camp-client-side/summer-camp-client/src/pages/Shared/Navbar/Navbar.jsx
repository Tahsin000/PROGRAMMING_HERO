import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../Providers/AuthProvider';
import SwapIcon from '../SwapIcon/SwapIcon';
import { FaPowerOff, FaRocket, FaHome } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import useCard from '../../../hooks/useCard';
import useCheckUser from '../../../hooks/useCheckUser';



const Navbar = () => {
    const {user, LogOut} = useAuth();

    const [card] = useCard();
    const [userChecker]=useCheckUser();
  // console.log(card);
    const handleSignOut = ()=>{
      LogOut()
      .then(result => console.log(result.user))
      .catch(error => console.log(error));
    }

    // const user = true;
    const navItems = <>
        <li><NavLink to="/" > <FaHome /> Home</NavLink ></li>
        <li><NavLink to="/instructors" > <FaRocket /> Instructors</NavLink ></li>
        <li><NavLink to="/classes" > <MdOutlineClass/> Classes</NavLink ></li>
        {
          user ? <li><button onClick={handleSignOut} > <FaPowerOff /> Sign out</button ></li>
          : <li><NavLink to="/login"> <FaPowerOff /> Sign in</NavLink ></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl md:h-14 h-10">
      <img src="title.svg" className='md:h-14 h-10' alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end flex gap-x-3 p-2">
    {
      user && <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          {
            userChecker === "admin" || <div className="absolute inline-flex items-center text-[red] bg-[#fff] justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-[2px] border-white rounded-full -top-2 -right-2 dark:border-gray-900">{card?.length || 0}</div>
          }
        
          <img src={user?.photoURL} /> 
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 z-10 shadow-md bg-base-100 rounded-box w-52">
        <li><small className='text-xs'>{user?.displayName || "unknown"}</small></li>
        <li>
          {/* <Link to="/dashboard/home" className="justify-between"> */}
          <Link to={userChecker === "admin" ? "/dashboard/home" : userChecker === "instructor" ?"/dashboard/instructor_classes" : "/dashboard/selected_classes"} className="justify-between">
            
            Dashboard
            {
              userChecker === "admin" || <span className="badge border-[red] text-[red]">{user && card?.length}</span> 
            }
          </Link>
        </li>
      </ul>
    </div>
    }
    
    <SwapIcon />

  </div>
</div>
    );
};

export default Navbar;