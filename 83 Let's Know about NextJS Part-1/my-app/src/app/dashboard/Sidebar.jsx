import Link from 'next/link';
import React from 'react';

const navLink = [
    {
        path:"/dashboard",
        title:"Dashboard"
    },
    {
        path:"/dashboard/add-product",
        title:"Add Product"
    },
    {
        path:"/dashboard/manage-product",
        title:"Manage Product"
    },
    {
        path:"/",
        title:"Home"
    }

]

const Sidebar = () => {
    return (
        <aside className='mr-10'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <ul>
                {
                    navLink.map(item=> <li key={item.path}> <Link href={item.path}>{item.title}</Link> </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;