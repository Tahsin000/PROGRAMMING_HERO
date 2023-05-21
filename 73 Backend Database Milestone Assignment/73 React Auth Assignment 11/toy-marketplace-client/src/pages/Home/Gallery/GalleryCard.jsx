import React, { useState } from 'react';

const GalleryCard = ({title, img}) => {
    const [Hover, setHover] = useState(false);
    return (
        <div>
            <div className="relative w-full">
            <img
                src={img}
                alt="Toy Image"
                className={`w-full h-auto rounded-xl`}
            />
            <div className="absolute bg-[#DB2458] text-[#F0D43B] w-full h-10 flex items-center justify-center rounded-md bottom-0 text-xl">{title}</div>
            {/* <p className="absolute left-[50%] start-0 bottom-3 ">Action Figures</p> */}
          </div>
        </div>
    );
};

export default GalleryCard;