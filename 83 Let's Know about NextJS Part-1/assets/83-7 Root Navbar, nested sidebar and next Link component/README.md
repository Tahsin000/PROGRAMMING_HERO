# 83-7 Root Navbar, nested sidebar and next Link component

## [Project Code](https://github.com/Tahsin000/PROGRAMMING_HERO/tree/1985ffe2d46b22c5e7a39888a680aa14dc9be6c7)

<hr/>

## Root Navbar

1. this is navbar component code

```js
import Link from "next/link";
import React from "react";

const navLink = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto ">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-center">
        {navLink.map((item) => (
          <li className="mx-2" key={item.path}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
```

## nested sidebar

1. this is the nested sidebar component code

```js
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
```
