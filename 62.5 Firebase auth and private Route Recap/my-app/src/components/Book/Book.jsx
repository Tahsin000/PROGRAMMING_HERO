/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Book = () => {
    const book_ID = useLoaderData();
    const [bookDetail, setBookDetail] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBookDetail(data))
    }, []);

    let _id, roomType, description, img, bed, people, price;
    const FindBook = bookDetail.find(bk=> bk._id == book_ID)
    if (FindBook){
        ({_id, roomType, description, img, bed, people, price} = FindBook);
    }
    console.log(book_ID)
    return (
        <div className='flex justify-center'>
            
            <div className='text-[3rem]  absolute md:top-[5rem] top-[10rem]'>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src={img} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{roomType}</h5>
                            <h5 class="text-[1.2rem] font-light tracking-tight text-gray-900 dark:text-white">{description}</h5>
                        </a>
                        <div class="flex flex-wrap gap-3 items-center mt-[1.5rem] mb-5">
                            <span className='flex flex-wrap gap-1  items-center'>
                                <img className='h-8' src="images/icons/bed.png" alt="" />
                                <p><small className='text-[1.2rem]'>{bed}</small></p>
                            </span>

                            <span className='flex flex-wrap gap-1 justify-center items-center'>
                                <img className='h-8' src="images/icons/person.png" alt="" />
                                <p><small className='text-[1.2rem]'>{people}</small></p>
                            </span>
                        </div>
                        <div class="">
                            <span class="text-6xl font-bold text-gray-900 dark:text-white">${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;