import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [FJob, setFJob] = useState([])
    const [showAll, setShowAll] = useState(false);
    
    useEffect(()=>{
        const url = 'FeaturedJob.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setFJob(data));
    } ,[])
    
    return (
        <section id='FeaturedJobsSection'>
           <div className=" w-100 md:px-7 pt-32 px-3">
                <div className='container mx-auto '>
                    <h2  data-aos="fade-up" className='text-[#1A1919] font-[800] md:text-[3rem] text-center text-[1.9rem]'>Featured Jobs</h2>
                    <p  data-aos="fade-up" className='md:text-[1rem] text-[#757575] text-[0.75rem] text-center mb-16'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {/* Featured Jobs Card */}
                        {
                            FJob.slice(0, showAll ? FJob.length : 4).map(job=> <FeaturedJob key={job._id} job={job}></FeaturedJob>)
                        }
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                {/* See All Jobs Button */}
                {
                    !showAll &&  <button className='rounded-md font-[800] text-white p-3 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' onClick={() => setShowAll(true)}>See All Jobs</button>
                }
            </div>
        </section>
    );
};

export default FeaturedJobs;