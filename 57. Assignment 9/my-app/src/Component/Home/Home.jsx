import React, { useEffect } from 'react';
import CategoryJobs from '../CategoryJobs/CategoryJobs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="bg-[#faf8ff] w-100 px-7 pt-5">
                <div className='container mx-auto '>
                    <div  className="grid md:grid-cols-2 justify-center items-center ">
                        {/* part-1 */}
                        <div data-aos="fade-right" className="md:order-1 order-2">
                            <h2 className='font-[800] md:text-[4rem] text-[1.9rem]'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h2>
                            <p className='text-[#757575] md:text-[1.1rem] text-[0.75rem] mt-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                           <a href="#FeaturedJobsSection">
                                <button className='md:p-[1.3rem] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md text-[#fff] mt-6 md:text-[1.3rem] text-[0.75rem] p-[0.75rem] font-[800]'>Star Applying</button>
                           </a>
                        </div>
                        <div data-aos="fade-left" className="order-1">
                            <img className='w-full md:mb-0 mb-9' src="All Images/P3OLGJ1 copy 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Category List */}
            <CategoryJobs></CategoryJobs>

            {/* Featured Jobs */}
            <FeaturedJobs ></FeaturedJobs>

            

            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Home;