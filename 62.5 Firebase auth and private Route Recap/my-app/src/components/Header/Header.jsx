// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const HandleLogOut=()=>{
        logOut()
        .then(()=>{})
        .then((error)=>{console.log(error)})
    }
    return (
        <div className="">
            
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://github.com/TEAM-OF-HHJN    " className="flex items-center">
                        <img src="HHJN.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HHJN</span>
                    </a>
                    
                    <div className="md:flex md:order-2 items-center  gap-5">
                        {
                            user && <p className='max-md:mt-3 block py-2 pl-3 pr-4 text-gray-900 rounded   md:p-0  dark:text-white dark:border-gray-700'>{user.email}</p>
                        }
                        {
                            !user ? <Link to="/login" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Login</Link> : <Link onClick={HandleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Log Out</Link>

                        }
                        <button onClick={()=>setShow(!show)} data-collapse-toggle="navbar-sticky" type="button" className="flex inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <img src="threeLine.svg" className="h-8" alt="Flowbite Logo"/>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${show ? "":"hidden"} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link to="/">
                                <a  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </Link>
                            {
                                !user && <Link to="/register">
                                <p  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign up</p>
                            </Link>
                            }
                        </ul>
                        
                    
                    </div>
                </div>
            </nav>
                

        </div>
    );
};

export default Header;