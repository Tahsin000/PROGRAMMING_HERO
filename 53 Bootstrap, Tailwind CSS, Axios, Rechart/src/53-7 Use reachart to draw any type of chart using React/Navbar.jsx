import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open , setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' },
      ];
      
    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?<XMarkIcon className="h-6 w-6 text-purple-500" /> : <Bars3Icon className="h-6 w-6 text-purple-500" /> 
                    }
                </span>
                
            </div>
            <ul className={`bg-green-300 md:flex absolute md:static duration-500 pl-8 ${open ? 'left-6' : '-left-48'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;