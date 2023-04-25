import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({room}) => {
    console.log(room._id);
    return (
        <div>
             <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src={room.img} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{room.roomType}</h5>
                        <h5 class="text-md font-light tracking-tight text-gray-900 dark:text-white">{room.description}</h5>
                    </a>
                    <div class="flex flex-wrap gap-3 items-center mt-[1.5rem] mb-5">
                        <span className='flex flex-wrap gap-1 justify-center items-center'>
                            <img className='h-8' src="images/icons/bed.png" alt="" />
                            <p><small>{room.bad}</small></p>
                        </span>

                        <span className='flex flex-wrap gap-1 justify-center items-center'>
                            <img className='h-8' src="images/icons/person.png" alt="" />
                            <p><small>{room.people}</small></p>
                        </span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${room.price}</span>
                        <Link to={`/${room._id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;