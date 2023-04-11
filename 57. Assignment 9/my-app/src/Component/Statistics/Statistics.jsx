import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
    {
      subject: 'A1',
      A: 57,
      fullMark: 60,
    },
    {
      subject: 'A2',
      A: 50,
      fullMark: 60,
    },
    {
      subject: 'A3',
      A: 59,
      fullMark: 60,
    },
    {
      subject: 'A4',
      A: 49,
      fullMark: 60,
    },
    {
      subject: 'A5',
      A: 57,
      fullMark: 60,
    },
    {
      subject: 'A6',
      A: 57,
      fullMark: 53,
    },
    {
      subject: 'A7',
      A: 60,
      fullMark: 60,
    },
    {
      subject: 'A8',
      A: 60,
      fullMark: 60,
    },
  ];
  

const Statistics = () => {
    
    return (
        <div>
            <div className="bg-[#faf8ff] w-100 px-7 pt-5 bg-img">
                <div className="container mx-auto my-7 ">
                    <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>Statistics</h2>
                </div>
            </div>
            <div className="w-100 px-7 pt-5 h-[15rem]">
                <div className="container mx-auto my-7 grid md:grid-cols-2 justify-center items-center">
                    <h2 data-aos="fade-right" data-aos-duration="1500" className='text-[#1A1919] text-center font-[400] md:text-[2rem]'>Assignment Mark chart</h2>
                <div data-aos="fade-left" data-aos-duration="1500" className=''>
                <RadarChart 
                        width={500}
                        height={500}
                        data={data}
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            {/* <Tooltip></Tooltip> */}
                    </RadarChart>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;