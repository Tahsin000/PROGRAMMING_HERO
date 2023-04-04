import React from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' },
      ];
      
    return (
        <div>
            <u>
                {
                    routes.map(route => <li>{route.name}</li>)
                }
            </u>
        </div>
    );
};

export default Navbar;