import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, category, price} = item
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" className='w-[6rem]' />
            <div className="">
                <h3 className='uppercase'>{name} ---------- </h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItem;