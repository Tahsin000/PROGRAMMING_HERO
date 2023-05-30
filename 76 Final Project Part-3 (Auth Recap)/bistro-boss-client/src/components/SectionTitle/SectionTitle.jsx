import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-500 mb-2'>{subHeading}</p>
            <h3 className='uppercase text-3xl border-y-2 py-3 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;