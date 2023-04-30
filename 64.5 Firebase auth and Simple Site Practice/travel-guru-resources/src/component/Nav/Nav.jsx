
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/HHJN.svg'
import { FaSearch } from "react-icons/fa";


const Nav = () => {
    const myStyle = {
        "fontFamily" :"'Montserrat', sans-serif",
        "fontWeight": "500"
    }
    return (
        <div className='container mx-auto pt-5 text-white' style={myStyle}>
            <div className="md:flex justify-between items-center">
                <div>
                    <img className='h-[4em]' src={Logo} alt="" />
                </div>
                <div className='w-[30%]'>
                    <div className="relative">
                        <input className='px-[4rem] bg-[rgba(255,255,255,0.2)] w-[100%] px-[1.5rem] py-[0.85rem] rounded-lg hover:text-[#b0b0b0]' placeholder='Search your Destination...' type="text" />
                        <FaSearch className='absolute left-5 top-4'></FaSearch>
                    </div>
                </div>
                <div>
                    <ul className='md:flex gap-[3rem]'>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg hover:text-[#b0b0b0]' to='/'>News</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg hover:text-[#b0b0b0]' to='/'>Destination</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg hover:text-[#b0b0b0]' to='/'>Blog</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg hover:text-[#b0b0b0]' to='/'>Contact</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] bg-[#F9A51A] rounded-lg text-black' to='/login'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;