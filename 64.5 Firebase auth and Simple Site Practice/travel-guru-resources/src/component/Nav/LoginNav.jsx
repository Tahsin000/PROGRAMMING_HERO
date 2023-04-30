import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/HHJN.svg'


const LoginNav = () => {
    const myStyle = {
        "fontFamily" :"'Montserrat', sans-serif",
        "fontWeight": "500"
    }
    return (
        <div className='container mx-auto pt-5' style={myStyle}>
            <div className="md:flex justify-between items-center">
                <div>
                    <img className='h-[4em]' src={Logo} alt="" />
                </div>
                <div>
                    <ul className='md:flex gap-[3rem]'>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg ' to='/'>News</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg ' to='/'>Destination</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg ' to='/'>Blog</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] rounded-lg ' to='/'>Contact</Link>
                        <Link className='px-[1.5rem] py-[0.85rem] bg-[#F9A51A] rounded-lg text-black' to='/login'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LoginNav;