import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getStorageJob } from '../Utilities/fakeDB';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const [JobDetail, setJobDetail] = useState([]);
    useEffect(()=>{
        fetch("../../../public/FeaturedJob.json")
        .then(res => res.json())
        .then(data => setJobDetail(data))
    }, []);
    const jobId = useLoaderData();
    // console.log(jobId);
    let _id, LLC , JobTitle, JobType, Description, Responsibility, Requirements, Experiences, Salary, Phone, Email, Address;
    const findJob = JobDetail.find(jd => jd._id == jobId);
    if (findJob){
        ({_id, LLC,JobTitle, JobType, Description, Responsibility, Requirements, Experiences, Salary, Phone, Email, Address} = findJob)
    }

    const addJobToDb = (id)=>{
        const JobList = getStorageJob();
        let flag = 0;
        for(const job in JobList){
            if (job === id){
                flag = 1;
                break;
            }
        }
        if(flag){
            
            toast.warning('You have already applied for this job multiple times !!!', {
                position: "top-center",
                autoClose: 3000,
                textAlign: 'center'
            });
            
        }
        else addToDb(id);
    }
    return (
        <div>
            <div className="bg-[#faf8ff] w-100 px-7 pt-5 h-[15rem]">
                <div className='container mx-auto my-7'>
                    <h2 data-aos="fade-up" data-aos-duration="500" className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>Job Details</h2>
                </div>
            </div>
            <div className="w-100 px-7 pt-9">
                <div className='container mx-auto py-9'>
                    <div  className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col gap-9 md:gap-12">
                        <h2 data-aos="fade-up" data-aos-duration="300" className='text-[#757575] font-[500] text-justify text-[1rem] md:col-span-2 md:order-1 order-2'>
                        <span className='text-[#1A1919] font-[800] '>Job Description: </span>
                        {Description}</h2>
                        <h2 data-aos="fade-up" data-aos-duration="300" className='text-[#757575] font-[500] text-justify text-[1rem] md:col-span-2 md:order-2 order-3'>
                        <span className='text-[#1A1919] font-[800] '>Job Responsibility: </span>
                        {Responsibility}</h2>
                        <h2 data-aos="fade-up" data-aos-duration="300" className='text-[#757575] font-[500] text-justify text-[1rem] md:col-span-2  md:order-3 order-4'>
                        <span className='text-[#1A1919] font-[800] '>Educational Requirements: <br /> </span>
                        {Requirements}</h2>
                        <h2  className='text-[#757575] font-[500] text-justify text-[1rem] md:col-span-2  md:order-4 order-5'>
                        <span className='text-[#1A1919] font-[800] '>Experiences: <br /> </span>
                        {Experiences}</h2>
                        <div className=" row-span-4  md:order-5 order-1 ">
                            <div className="bg-[#f4f1ff] rounded-md p-7">
                                <h1 className='text-[#1A1919] font-[800] md:text-[1.25rem]'>Job Details</h1>
                                <hr className='my-[.75rem] h-px bg-gray-400 border-0' />
                                <div className="flex flex-wrap gap-3">
                                    <img src="/Icons/Frame.svg" alt="" />
                                    <p className='text-[#757575] md:text-[1.25rem]'> <span className='font-[700] text-[#474747]'>Salary  :</span> {Salary} (Per Month)</p>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <img src="/Icons/Frame-1.svg" alt="" />
                                    <p className='text-[#757575] md:text-[1.25rem]'> <span className='font-[700] text-[#474747]'>Job Title :</span> {JobTitle }</p>
                                </div>
                                <h1 className='text-[#1A1919] font-[800] md:text-[1.25rem] mt-5'>Contact Information</h1>
                                <hr className='my-[.75rem] h-px bg-gray-400 border-0' />
                                <div className="flex flex-wrap gap-3">
                                    <img src="/Icons/Frame-2.svg" alt="" />
                                    <p className='text-[#757575] md:text-[1.25rem]'><span className='font-[700] text-[#474747]'>Phone :</span> {Phone}</p>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <img src="/Icons/Frame-3.svg" alt="" />
                                    <p className='text-[#757575] md:text-[1.25rem]'> <span className='font-[700] text-[#474747]'>Email :</span> {Email}</p>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <img src="/Icons/Frame-4.svg" alt="" />
                                    <p className='text-[#757575] md:text-[1.25rem]'> <span className='font-[700] text-[#474747]'>Address :</span> {Address}</p>
                                </div>

                            </div>
                            <button className='w-full mt-[1.25rem] rounded-md font-[800] text-white p-3 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' onClick={()=> addJobToDb(_id)}>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default JobDetails;