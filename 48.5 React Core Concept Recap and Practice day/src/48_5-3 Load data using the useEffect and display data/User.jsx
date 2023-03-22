import React from 'react';
import './LoadData.css'
const User = (props) => {
    return (
        <div className='user'>
            <h1>userId: {props.userId}</h1>
            <h3>ID: {props.id}</h3>
            <p>Title: {props.title}</p>
            <small>{props.body}</small>
        </div>
    );
};

export default User;