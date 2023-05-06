import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


import ProfileCard from '../Navbar/ProfileCard';
import LoginBtn from '../Navbar/LoginBtn';

const BlogNavbar = () => {
    

    const {user} = useContext(AuthContext);

    // const [isShown, setIsShown] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);
    console.log(user);

    // console.log(isShown)
    return (
        <div>
            
<nav className=" border-gray-200 bg-[#e1e7d1]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

  <a target="_blank" href="https://github.com/TEAM-OF-HHJN" className="flex items-center ">
      <img src="HHJN.svg" className="h-8 mr-3" alt="HHJN Logo" />
      <span className="self-center font-bold text-2xl font-semibold whitespace-nowrap dark:text-white" style={{"fontFamily":"'Oswald', sans-serif"}}></span>
  </a>
  {/* ================================== */}
  {
    user ? <ProfileCard ShowMenu={ShowMenu} setShowMenu={setShowMenu}></ProfileCard> : <LoginBtn ShowMenu={ShowMenu} setShowMenu={setShowMenu} ></LoginBtn>
    
  }
  {/* ================================== */}
  <div className={`items-center ${ShowMenu ? '': 'hidden'} justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`}>
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        
        <NavLink to="/" className="block py-2 pl-3 pr-4 text-[#60781e]  rounded md:hover:bg-transparent md:hover:text-[#2f3816] md:p-0 " aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Blog" className="block py-2 pl-3 pr-4 text-[#60781e] rounded md:hover:bg-transparent md:hover:text-[#2f3816] md:p-0 ">Blog</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </div>
    );
};

export default BlogNavbar;