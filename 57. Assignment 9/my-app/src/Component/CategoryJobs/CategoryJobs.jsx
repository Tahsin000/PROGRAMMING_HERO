import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategoryJob from '../CategoryJob/CategoryJob';

const Jobs = () => {

    const [CJob, setCJob] = useState([]);
    useEffect(()=>{
        const url = 'CategoryJob.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setCJob(data));
    },[]);
    return (
        <div>
           <div className=" w-100 md:px-9 pt-32 px-3">
                <div className='container mx-auto '>
                    <h2 data-aos="fade-up"  className='text-[#1A1919] font-[800] md:text-[3rem] text-center text-[1.9rem]'>Job Category List</h2>
                    <p data-aos="fade-up"  className='md:text-[1rem] text-[#757575] text-[0.75rem] text-center mb-16'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className="grid md:grid-cols-4 gap-3">
                        {/* Featured Jobs Card */}
                        {
                            CJob.map(job => <CategoryJob key={job.id} job={job}></CategoryJob>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;