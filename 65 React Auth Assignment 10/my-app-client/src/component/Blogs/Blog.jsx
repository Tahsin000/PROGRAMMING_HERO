import React from 'react';

const Blog = ({data}) => {
    const {img, title, subtitle} = data;
    return (
        <div>
            <div className="rounded-lg shadow-md p-5 md:flex md:items-center md:gap-5 border">
                <img className='aspect-[4/3] md:w-[10rem] rounded-lg mb-3' src={img} alt="" />
                <div className="">    
                    <h2 className='text-[1.25rem] font-semibold '>{title}</h2>
                    <p className='text-justify mt-3'>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;