import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend); 
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h1>Name: {friend.name}</h1>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;