import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Link from './Link';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            This is All Phone Details
            <div style={{
                
                "display": "grid",
                "grid-template-columns": "repeat(3, 1fr)",
                "gap": "2rem"
            }}>
            {
                phones.map(phone => <Link key={phone._id} phone={phone}></Link>)
            }
            </div>
        </div>
    );
};

export default Phones;