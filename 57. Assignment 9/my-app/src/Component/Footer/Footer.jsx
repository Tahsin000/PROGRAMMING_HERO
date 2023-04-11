import React from 'react';

const Footer = () => {
    return (
        <div className='pt-32'>
            <div className="bg-[#1A1919] w-full text-[#fff]">
                <div className="container mx-auto">
                    <div className="max-md:p-9  grid md:grid-cols-5 gap-7 pt-16">
                        <div className="">
                            <h2 className='text-[2rem] font-[800]'>HHJN_Hub</h2>
                            <p className='text-[1rem] leading-[1.6rem] text-[#8a8a8a] mt-[1.25rem]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <img className='my-[1.25rem]' src="../../../public/Icons/Group 9969.png" alt="" />
                        </div>

                        <div className="">
                            <h2 className='text-[1.25rem] font-[600]'>Company</h2>
                            <p className='text-[1rem] leading-[2.5rem] text-[#8a8a8a] mt-[1.25rem]'>About Us<br />
                                Work <br />
                                Latest News <br />
                                Careers
                            </p> 
                        </div>

                        <div className="">
                            <h2 className='text-[1.25rem] font-[600]'>Product</h2>
                            <p className='text-[1rem] leading-[2.5rem] text-[#8a8a8a] mt-[1.25rem]'>Prototype<br />
                                Plans & Pricing<br />
                                Customers<br />
                                integration
                            </p> 
                        </div>

                        <div className="">
                            <h2 className='text-[1.25rem] font-[600]'>Support</h2>
                            <p className='text-[1rem] leading-[2.5rem] text-[#8a8a8a] mt-[1.25rem]'>Help Desk<br />
                                Sales<br />
                                Become a Partner<br />
                                Developers
                            </p> 
                        </div>

                        <div className="">
                            <h2 className='text-[1.25rem] font-[600]'>Contact</h2>
                            <p className='text-[1rem] leading-[2.5rem] text-[#8a8a8a] mt-[1.25rem]'>524 Broadway , NYC<br />
                            +1 777 - 978 - 5570<br />
                            </p> 
                        </div>

                        
                    </div>
                    <hr className='mt-9' />
                    <div className="max-md:p-9 flex justify-between py-9">
                        <p className='mt-3 text-[#8a8a8a]'>@2023 <span className='font-[800]'>HHJN_Hub</span>. All Rights Reserved</p>
                        <p className='mt-3 text-[#8a8a8a]'>Powered by <span className='font-[800]'>HHJN_Hub</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;