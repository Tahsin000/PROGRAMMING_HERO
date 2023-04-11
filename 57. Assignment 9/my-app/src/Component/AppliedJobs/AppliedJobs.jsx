import React, { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { getStorageJob } from '../Utilities/fakeDB';

const AppliedJobs = () => {
    let LocalStorage = [];
    const flag = getStorageJob();
    const[jobList, setJobList] = useState([]);
    const [selectedJobType, setSelectedJobType] = useState("");
    useEffect(()=>{
        fetch("FeaturedJob.json")
        .then(res => res.json())
        .then(data => setJobList(data));
    }, []);
    for(const v in flag){
        const findCheck = jobList.find(g => g._id === v)
        if (findCheck){
            LocalStorage.push(findCheck);
        }
    }
    let FilterLocalStorage ;
    
    const filteredJobs = LocalStorage.filter((job) =>
        selectedJobType === "" ? true : job.JobType[0] === selectedJobType
        
    );
    // useEffect(()=>{
    //     if(selectedOption === "Remote"){
    //         LocalStorage.sort(sortByRemote);
            
    //         console.log(selectedOption);
    //     }
    //     setJobList(LocalStorage);
    // },[]);

    return (
        <div>
            <div className="bg-[#faf8ff] w-100 px-7 pt-5 h-[15rem] bg-img">
                <div className='container mx-auto my-7'>
                    <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>Applied Jobs</h2>
                </div>
            </div>
            <div className="w-100 px-7 pt-5">
                <div className='container mx-auto my-7 grid grid-cols-1 gap-4'>
                    <div className="flex justify-end">
                        <select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)} id="countries" className="w-bg-gray-50 border-2 border-[#586eff] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                            <option selected>Filter By</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                    {
                        filteredJobs.map((applyJob, i)=> <AppliedJob key={i} applyJob={applyJob}></AppliedJob>)
                    }
                    
                </div>
            </div>
        </div>
        
        
    );
};

export default AppliedJobs;