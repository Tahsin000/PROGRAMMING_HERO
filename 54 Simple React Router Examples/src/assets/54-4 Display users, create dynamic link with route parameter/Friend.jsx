import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>
                <Link to={`/friend/${id}`}>Show me Details</Link>
            </p>
        </div>
    );
};

export default Friend;