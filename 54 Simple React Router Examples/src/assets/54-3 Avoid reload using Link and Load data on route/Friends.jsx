import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../54-4 Display users, create dynamic link with route parameter/Friend'

const Friends = () => {
    const Friends = useLoaderData();
    // console.log(Friends);
    return (
        <div>
            <h3>This is Friends page</h3>
            <div className="">
                {
                    Friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;