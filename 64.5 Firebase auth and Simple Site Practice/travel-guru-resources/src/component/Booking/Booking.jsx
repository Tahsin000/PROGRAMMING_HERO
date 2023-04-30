import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div className="container mx-auto">
            <div className='flex flex-col justify-between h-[80vh]'>
                <div className="h-full flex items-center text-white">
                    <div className="grid md:grid-cols-2 gap-[5rem] h-[70%]">
                        <section className='flex flex-col justify-center'>
                            <h2 className="text-[6rem]" style={{fontFamily :'Bebas Neue'}}>{`Cox's bazar`}</h2>
                            <p className='text-[1rem] font-[400]' style={{fontFamily: 'Montserrat'}}>
                                {`Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.`}
                            </p>
                        </section>
                        <form style={{fontFamily: 'Montserrat'}} className='p-[3rem] text-[1rem] text-[#818181] h-full bg-white rounded-lg flex flex-col justify-center items-center'>
                            <div className="w-full">
                                <p className='text-[1rem]'>Origin</p>
                                <input type="text" className='w-full text-[1.25rem] font-[600] bg-[#F2F2F2] mt-2 p-[1rem] rounded-lg text-black' name="origin"/>
                            </div>
                            <div className="w-full mt-5">
                                <p className='text-[1rem]'>Destination</p>
                                <input type="text" className='w-full text-[1.25rem] font-[600] bg-[#F2F2F2] mt-2 p-[1rem] rounded-lg text-black' name="destination"/>
                            </div>
                            <div className="w-full mt-5 grid md:grid-cols-2 gap-3">
                                <div className="">
                                    <p className='text-[1rem]'>Form</p>
                                    <input type="date" className='w-full text-[1.25rem] font-[600] bg-[#F2F2F2] mt-2 p-[1rem] rounded-lg text-black' name="dateForm"/>
                                </div>
                                <div className="">
                                    <p className='text-[1rem]'>To</p>
                                    <input type="date" className='w-full text-[1.25rem] font-[600] bg-[#F2F2F2] mt-2 p-[1rem] rounded-lg text-black' name="dateTo"/>
                                </div>
                            </div>
                            <div className="w-full mt-5 ">
                                <button className='w-full text-[1.25rem] font-[600] bg-[#F9A51A] mt-2 p-[1rem] rounded-lg text-black' name="dateTo">Start Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Booking;