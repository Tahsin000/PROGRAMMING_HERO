import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillLike, AiFillStar } from "react-icons/ai";

import 'aos';
const ChefCard = ({chef}) => {
    const {_id, chefName,chefImg, experience, rating, likes } = chef;
    return (
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:mt-[3rem] max-w-sm bg-[#ffffff] border border-gray-200 rounded-lg shadow ">
                <a href="#">
                    <img  className="w-full rounded-t-lg" src={chefImg} alt="" />
                </a>
                <div className="p-5 w-full">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{chefName}</h5>
                    </a>

                    <p className="mb-3 font-normal text-gray-700 ">{experience} experience</p>
                    
                    <div className="flex gap-3">
                        <p className="border border-[#a7b08c] rounded-md border-1 px-2 py-1 mb-3 font-normal text-gray-700 flex justify-center gap-3 items-center">
                            <AiFillStar className='text-[1rem]' /> 
                            {rating}</p>
                        <p className="border border-[#a7b08c] rounded-md border-1 px-2 py-1 mb-3 font-normal text-gray-700 flex justify-center gap-3 items-center">
                            <AiFillLike className='text-[1rem]' /> 
                            {likes}
                        </p>

                    </div>

                    <Link to={`/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#727762] rounded-lg hover:bg-[#575b4b] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        View Recipes
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
    );
};

export default ChefCard;