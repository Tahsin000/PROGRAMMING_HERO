import React from 'react';

const Tag = (props) => {
    const tag = props.tg;
    // console.log(tag);
    return (
        <span className='me-3'>       
            <span className="mt-1 text-secondary">{tag}</span>
        </span>
    );
};

export {Tag as TagInfo}; 