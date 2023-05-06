import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LoginBtn = ({setShowMenu, ShowMenu}) => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex gap-5 md:order-1'>
            <Link to="/login" className=' bg-[#686e55] py-[0.5rem] px-[3rem] rounded-lg text-white drop-shadow-md'>
                Login
            </Link>
            <button onClick={() => setShowMenu(!ShowMenu)} data-collapse-toggle="mobile-menu-2" type="button" className=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
};

export default LoginBtn;