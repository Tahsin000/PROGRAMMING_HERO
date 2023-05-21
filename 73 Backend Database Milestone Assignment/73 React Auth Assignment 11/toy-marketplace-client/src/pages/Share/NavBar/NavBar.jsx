import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaRegUserCircle } from "react-icons/fa";


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogin=()=>{
    <Navigate to="/" />
    logOut()
    .then(()=>{})
    .catch(()=>{});
  }

  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/alltoy">All Toys</Link>
      </li>
      {
        user && <> <li> <Link to={`/products/my_product`}>My Toys</Link> </li>  <li> <Link to="/addtoys">Add Toy</Link> </li>  </> 
      }
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs </Link>
      </li>
      {
        !user && <li> <Link to="/login">Login</Link> </li>
      }
    </>
  );
  return (
    <div className="navbar text-[#301755]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl p-3 h-[100%] flex gap-3">
          <img src={logo} className="w-12" alt="" />
          <span className="text-[#301755]">ToY</span>
          <span className="text-[#DB2458]">House</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {
                user && <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
              }
              {
                !user && <div className="w-10 rounded-full">
                < FaRegUserCircle className="w-full text-4xl"/>
              </div>
              }
              
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {
                user && <>
                <li>
                  <a className="justify-between font-bold">
                    {user.displayName} <br />
                  </a>
                    <p className="block"><small>{user.email}</small></p>
                </li>
                <li>
                  <button onClick={handleLogin}>Logout</button>
                </li>
                </>
              }
               {
                !user && <>
                <li>
                  <a className="justify-between font-bold">
                    No user <br />
                  </a>
                </li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
