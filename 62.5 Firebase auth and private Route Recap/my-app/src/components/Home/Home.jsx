// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const rooms = useLoaderData();
    return (
        
        <div className="flex justify-center">
            <div className='grid lg:grid-cols-3 gap-2 absolute md:top-[5rem] top-[10rem] py-3'> 
                {
                    rooms.map(room =>  <Card key={room._id} room={room}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;