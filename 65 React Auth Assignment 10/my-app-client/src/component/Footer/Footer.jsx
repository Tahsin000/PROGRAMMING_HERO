import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-[5rem] bg-[#959D7B] text-[#3a3c32]'>
            <section className='container mx-auto grid md:grid-cols-3 gap-3 gap-y-7'>
                <ul className='flex gap-8 justify-center font-semibold'>
                    <Link className='md:hover:text-[#eafcb1]'>Menu</Link>
                    <Link className='md:hover:text-[#eafcb1]'>Team</Link>
                    <Link className='md:hover:text-[#eafcb1]'>Events</Link>
                    <Link className='md:hover:text-[#eafcb1]'>Contact</Link>
                </ul>
                <div className='flex flex-col gap-5 items-center'>
                    <p className='font-semibold'>HHJN</p>
                    <div className='flex gap-5'>
                        <Link className='md:hover:text-[#eafcb1]'> <FaFacebook className='text-[1.5rem]' /> </Link>
                        <Link className='md:hover:text-[#eafcb1]'> <FaInstagram className='text-[1.5rem]' /> </Link>
                        <Link className='md:hover:text-[#eafcb1]'> <FaTwitter className='text-[1.5rem]' /> </Link>
                        <Link className='md:hover:text-[#eafcb1]'> <FaYoutube className='text-[1.5rem]' /> </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:items-end items-center'>
                    <p className='font-semibold'>Contact Us</p>
                    <input className='w-[50%] h-[2rem] rounded-md px-2 font-semibold' type="text" />
                    <button className='w-[50%] bg-[#727762] h-[2rem] rounded-md text-white font-light md:hover:text-[#eafcb1] drop-shadow-md'>Submit</button>
                </div>
            </section>
        </div>
    );
};

export default Footer;