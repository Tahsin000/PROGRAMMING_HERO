import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillStar } from "react-icons/ai";


const RecipeCard = ({recipe}) => {
    const [Favorite, setFavorite] = useState(false);
    const {recipeName, ingredients, method, rating, likes} = recipe;

    const handleFavorite = ()=>{
        toast.success('Added to favorites!', {
            position: "top-center",
            });
    }
    return (
        <div className="bg-white rounded-lg border-2 shadow-lg justify-between">

            <div className="grid md:grid-cols-3 grid-cols-1 md:divide-x p-3 max-md:divide-y">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="mt-7 font-bold text-center md:text-[1rem] text-[0.8rem]">{recipeName}</h1>
                    <ul className='grid md:grid-cols-2 gap-x-8 text-[0.9rem] place-items-center'>
                        {
                            ingredients.map((ingredient, i) =>  <li key={i} className='list-decimal'>{ingredient}</li> )
                        }
                        {/* <li key={i} className='list-decimal'>{ingredient}</li> */}
                        
                    </ul>
                </div>
                <div className="mt-7 text-center flex flex-col  md:p-5">
                    <p className='text-center font-bold md:text-[1rem] text-[0.8rem]'>Method</p>
                    <p>{method}</p>
                </div>
                <div className="mt-7 text-center flex flex-col justify-around">
                    <p className="text-[0.9rem]"> <div className="flex justify-center gap-3 items-center">
                    <AiFillStar className='text-[1rem]'/> {rating}
                        </div> </p>
                    <div className="" onClick={()=>setFavorite(true)}>
                        {
                            Favorite ? <button ><MdFavorite className='text-[1.5rem] text-gray-500' /> </button> : <button onClick={handleFavorite}> <MdFavoriteBorder className='text-[1.5rem]' />  </button>
                        }
                    </div>
                </div>
                <ToastContainer />

            </div>


            {/* <div className="">
                <h1 className="mt-7 text-3xl text-center">recipe name</h1>
                <ul className='grid grid-cols-2 gap-x-5 py-3'>
                    <li className='text-xl'>asasa</li>
                    <li className='text-xl'>asasa</li>
                    <li className='text-xl'>asasa</li>
                    <li className='text-xl'>asasa</li>
                </ul>
            </div>
            <div className="">
                <p className='text-center'><small>cooking method</small></p>
                <div className="flex justify-between md:gap-7 gap-2 mt-3">
                    <p className="border border-1 rounded p-2">rating 5</p>
                    <p className="border border-1 rounded p-2 flex items-center " onClick={()=>setFavorite(true)}> 
                    {
                        Favorite ? <button ><MdFavorite className='text-[1.5rem] text-gray-500' /> </button> : <button onClick={handleFavorite}> <MdFavoriteBorder className='text-[1.5rem]' />  </button>
                    }
                        <ToastContainer />
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default RecipeCard;