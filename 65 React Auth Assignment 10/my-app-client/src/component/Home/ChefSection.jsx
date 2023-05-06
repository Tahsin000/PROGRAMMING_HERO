import React from 'react';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const ChefSection = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div className='bg-[#e1e7d1] py-[5rem] h-auto'>
            <div className='container mx-auto'>
                <h1 className='text-[#464b3b] text-center font-bold text-4xl md:text-7xl'>CHEF</h1>
                {/* Chef Card */}
                <div className="grid md:grid-cols-3 gap-3 place-items-center p-3 mt-6">
                    {
                        chefs.map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefSection;