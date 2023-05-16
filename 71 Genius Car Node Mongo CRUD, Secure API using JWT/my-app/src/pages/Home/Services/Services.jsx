import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://car-doctor-six.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='my-5'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold text-orange-500">Service</h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. {services.length}</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-24 gap-5 place-items-center'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
        </div>
        
    );
};

export default Services;