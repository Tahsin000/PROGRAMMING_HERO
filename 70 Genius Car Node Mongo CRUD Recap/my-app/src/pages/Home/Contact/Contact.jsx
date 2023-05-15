import React from 'react';

import img1 from '../../../assets/icons/time.svg'
import img2 from '../../../assets/icons/call.svg'
import img3 from '../../../assets/icons/map.svg'

const Contact = () => {
    return (
        <div className='max-md-p-3'>
            <div className='w-full bg-[#151515] my-12 p-7 rounded-xl md:py-16'>
                <div className='grid md:grid-cols-3 gap-5 place-items-center'>
                        <div className='flex gap-5'>
                            <img src={img1} alt="" />
                            <div className=''>
                                <p className='text-xl text-white'>We are open monday-friday</p>
                                <h2 className='text-2xl text-white font-bold'>7:00 am - 9:00 pm</h2>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <img src={img2} alt="" />
                            <div className=''>
                                <p className='text-xl text-white'>Have a question?</p>
                                <h2 className='text-2xl text-white font-bold'>+2546 251 2658</h2>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <img src={img3} alt="" />
                            <div className=''>
                                <p className='text-xl text-white'>Need a repair? our address</p>
                                <h2 className='text-2xl text-white font-bold'>Liza Street, New York</h2>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;