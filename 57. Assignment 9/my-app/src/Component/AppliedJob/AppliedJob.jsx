import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({applyJob}) => {
    const {_id, img, JobTitle, LLC, JobType, Address, Salary} = applyJob;
    const navigate = useNavigate();
    const handlNavigation = (id) =>{
        navigate(`/applied_jobs/${id}`);
    }
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration={400} className="md:flex justify-between items-center border md:p-4 p-3 rounded-md">
                <div className="md:flex flex-wrap gap-7 justify-center items-center">
                        <div className="bg-[#F4F4F4] rounded-md h-[10rem] w-[9rem] flex justify-center items-center">
                            <img className='w-[7rem]' src={img} alt="" />

                        </div>
                        <div className="">
                            <h2 className='text-[#474747] font-[800] max-md:mt-5 md:text-[1.25rem]'>{JobTitle}</h2>
                            <p className='text-[#757575] md:text-[1.25rem]' >{LLC}</p>
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
                    </div>
                </div>
                <div className="max-md:mt-4">
                    <button onClick={()=> handlNavigation(_id)} className='rounded-md font-[800] text-white p-3 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;