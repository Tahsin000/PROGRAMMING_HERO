import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 hover:bg-purple-100 p-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;