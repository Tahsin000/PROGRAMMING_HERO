import React from 'react';
import { BeakerIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';


const FeaturedJob = ({job}) => {
    const {_id, img,JobTitle, LLC, JobType, Address, Salary} = job;

    const navigate = useNavigate();
    const handlNavigation = (id) =>{
        navigate(`/${id}`);
    }
    let  trangitiasion   = ((_id * 300) % 900);
    trangitiasion = (trangitiasion === 0) ? 300 : trangitiasion ;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration={trangitiasion} className="h-full border-2 border-[#E8E8E8] p-[2.5rem] rounded-md">
                <img src={img} alt="" className='w-[7.2rem]'/>
                <h2 className='text-[#474747] font-[800] text-[1.5rem] mt-[2rem]'>{JobTitle}</h2>
                <p className='text-[#757575] text-[1.25rem]'>{LLC}</p>
                <div className="flex flex-wrap gap-3 my-3">
                    {
                        JobType.map((jb, i)=> <p key={i} className='text-[#9873FF] font-[800] text-[1rem] px-3 py-2 border-2 rounded-md border-[#9873FF]'>{jb}</p>)
                    }
                    
                </div>
                <div className="flex flex-wrap md:gap-4 gap-2 md:mt-[1.6rem]">
                    <div className="flex flex-wrap gap-2 max-md:mt-[1rem]">
                        <img className='max-md:w-[1rem]' src="../../../public/Icons/Map.svg" alt="" />
                        <span className='text-[#757575] font-[600] text-[0.75rem] md:text-[1.25rem]'>{Address}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <img className='max-md:w-[1rem]' src="../../../public/Icons/Doller.svg" alt="" />
                        <span className='text-[#757575] font-[600] text-[0.75rem] md:text-[1.25rem]'>Salary : {Salary}</span>
                    </div>
                </div>
                <button onClick={()=> handlNavigation(_id)} className='mt-[1.45rem] rounded-md font-[800] text-white p-3 px-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;