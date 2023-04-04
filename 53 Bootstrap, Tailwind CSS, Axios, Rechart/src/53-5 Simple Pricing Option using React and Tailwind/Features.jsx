import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-yellow-200" />
            <span className='pl-4'>{feature}</span>
        </div>
    );
};

export default Features;