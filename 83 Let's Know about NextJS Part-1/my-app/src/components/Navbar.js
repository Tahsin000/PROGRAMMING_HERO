import Link from 'next/link';
import React from 'react';

const navLink = [
    {
        path:'/',
        title:'Home'
    },
    {
        path:'/about',
        title:'About'
    },
    {
        path:'/profile',
        title:'Profile'
    },
    {
        path:'/blogs',
        title:'Blogs'
    },
    {
        path:'/dashboard',
        title:'Dashboard'
    }
]

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between container mx-auto '>
            <h1 className='text-3xl font-semibold'>Next Hero</h1>
            <ul className='flex items-center justify-center'>
                {
                    navLink.map(item =>  <li className='mx-2' key={item.path} ><Link href={item.path}>{item.title}</Link></li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;