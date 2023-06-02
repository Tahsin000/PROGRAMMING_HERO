import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
  const {user, LogOut} = useContext(AuthContext);
  const [cart] = useCart();

  const heandleLogout = () =>{
    LogOut()
    .then(result => console.log(result.user))
    .catch(error => console.log(error));
  }

  const navbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/salad">Order Food</Link>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
        
        {
          user ? <>
          {/* <h2 className="">{user.displayName}</h2> */}
          <button onClick={heandleLogout}>LogOut</button>
          </> : <Link to="/login">Login</Link>
        }
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
