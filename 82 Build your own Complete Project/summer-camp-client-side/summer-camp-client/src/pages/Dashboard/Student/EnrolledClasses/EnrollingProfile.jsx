import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';

import { AiFillPlayCircle } from "react-icons/ai";
import useEnroll from '../../../../hooks/useEnroll';
import useClass from '../../../../hooks/useClass';
import { Helmet } from 'react-helmet-async';


const EnrollingProfile = () => {
    const data = useParams();
    
    const [classes] = useClass();
    const loadedData = classes.filter(enrollItem => enrollItem?._id === data?.id);
    console.log(data?.id)
    console.log(loadedData[0]?.image)
    return (
        <div className='w-full p-10'>
            <SectionTitle className="" title="Start Your Course" />
            <Helmet>
                <title>Course | Inkwell Studio</title>
            </Helmet>
            <div className="w-full relative">
                <div className="w-full relative">
                    <img  className="w-full bg-[#000] aspect-[16/9] border rounded-md " src={loadedData[0]?.image}alt="" />

                    <div className="absolute top-0 opacity-75 w-full bg-[#000] aspect-[16/9] border rounded-md"></div>
                </div>
                
                    <AiFillPlayCircle className='bg-primary top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 absolute text-[5rem] rounded-full shadow-sm'/>

            </div>
        </div>
    );
};

export default EnrollingProfile;