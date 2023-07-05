import React from 'react';

const template = ({children}) => {
    return (
        <div>
            <button className='btn btn-primary'> WOW ! </button>
            {children}
        </div>
    );
};

export default template;