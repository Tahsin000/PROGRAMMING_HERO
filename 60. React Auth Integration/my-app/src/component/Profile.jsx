import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='w-screen h-screen flex flex-col flex-wrap gap-7 items-center'>
            <h1 className='text-2xl mt-9'>{user.displayName}</h1>
            <h1 className='text-xl'>{user.email}</h1>
            <p><img  className='rounded-full' src={user.photoURL} alt="" /></p>
        </div>
    );
};

export default Profile;