import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { AiFillLike, AiFillStar } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';


const ViewRecipes = () => {
    const chefData = useLoaderData();
    const {_id, chefName,chefImg, experience, rating, likes, bio, recipes } = chefData;
    return (
        <section>
            
            <div className='grid md:grid-cols-3 md:p-5 h-auto'  style={{backgroundImage:"url('./chef banner.png')", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition: "bottom"}}>
                <div className=""></div>
                <div className="container mx-auto py-10 px-3">
                    <div className="bg-white rounded-lg">
                        <div className="flex flex-col items-center p-10">
                            <img className="aspect-[1/1] w-[15rem] rounded-full" src={chefImg} alt="" />
                            <h1 className="mt-7 text-3xl text-center font-semibold">{chefName}</h1>
                            <p className="my-3 text-justify">{bio}</p>
                            <div className="flex flex-wrap justify-center md:gap-7 gap-2  ">
                                <p className="border border-1 rounded p-2 flex justify-center gap-3 items-center">
                                    <span><AiFillLike className='text-[1rem]' /></span> 
                                    <span>{likes}</span> 
                                </p>
                                <p className="border border-1 rounded p-2 flex justify-center gap-3 items-center">
                                    <span><AiFillStar className='text-[1rem]' /></span> 
                                    <span>{rating}</span> 
                                </p>
                                <p className="border border-1 rounded p-2">{experience} experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <h2 className='text-center font-semibold  md:text-7xl text-4xl my-10'>Recipe</h2>
                <div className="container mx-auto py-5">
                    <div className='grid md:grid-cols-1 p-3 gap-3'>
                        {
                            recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe}></RecipeCard>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ViewRecipes;