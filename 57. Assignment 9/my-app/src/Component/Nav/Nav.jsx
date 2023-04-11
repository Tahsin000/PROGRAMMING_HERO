import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    const [open , setOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <nav className="">
            <div className='md:p-6 px-7 py-7 bg-[#faf8ff]'>
                <div onClick={()=> setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ?<XMarkIcon className="h-6 w-6 text-purple-500" /> : <Bars3Icon className="h-6 w-6 text-purple-500" /> 
                        }
                    </span>
                    
                </div>
                <div className= {`z-40 md:p-0 px-15 py-7 w-full h-full absolute duration-500 md:static ${open ? 'left-0' : '-left-[32rem]'}`}>

                    <div className={`px-7 py-7 bg-[#faf8ff] mx-auto grid gap-9  container md:flex justify-between items-center  `}>
                        <a target='_blank' href={'https://github.com/TEAM-OF-HHJN'}><img className='w-[4rem]' src="HHJN.svg" alt="Home" /></a>
                        <ul className='md:flex justify-between grid gap-5'>
                            <li className='md:px-7'>
                                <NavLink to="/" className='text-[#666666]'>Home</NavLink>
                            </li>
                            <li className='md:px-7'>
                                <NavLink to="/statistics" className='text-[#666666]'>Statistics</NavLink>
                            </li>
                            <li className='md:px-7'>
                                <NavLink to="/applied_jobs" className='text-[#666666]'>Applied Jobs</NavLink>
                            </li>
                            <li className='md:px-7'>
                                <NavLink to="/blog" className='text-[#666666]'>Blog</NavLink>
                            </li>
                        </ul>
                        <Link to="/">
                            <button className='rounded-md font-[800] text-white p-3 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </nav>
    );
};

export default Nav;