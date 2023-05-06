import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ProfileCard = ({setShowMenu, ShowMenu}) => {
    const [isShown, setIsShown] = useState(false);

    const {user, logOut} = useContext(AuthContext);

    return (
        <div className="flex items-center md:order-3">
        <button onMouseEnter={() => setIsShown(!isShown)} onMouseLeave={() => setIsShown(!isShown)} onClick={() => setIsShown(!isShown)} type="button" className="flex mr-3 text-sm bg-[#959D7B] rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" >
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="user photo"/>
        </button>
        <div className={` ${isShown ? '': 'hidden'}`}>
          <div className={`z-50 fixed top-12 max-md:right-[15%] right-[10%] my-4 text-base list-none bg-[#b8c297] divide-y divide-gray-100 rounded-lg shadow drop-shadow-lg`}>
              <div className="flex flex-col jus p-4 gap-2">
                <span className="block text-sm  ">{user.displayName}</span>
                <span className="block text-sm  text-gray-900 truncate ">{user.email}</span>
                <Link onClick={logOut} className=' bg-[#686e55] text-center py-[0.5rem] px-[3rem] rounded-lg text-white drop-shadow-md'>
                  Sign Out
                </Link>
              </div>
          </div>
        </div>
        <button onClick={() => setShowMenu(!ShowMenu)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex md:hidden items-center p-2 ml-1 text-sm text-white rounded-lg" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    );
};

export default ProfileCard;