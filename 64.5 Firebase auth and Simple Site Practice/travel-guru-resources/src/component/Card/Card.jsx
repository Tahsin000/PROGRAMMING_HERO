import React from 'react';
import './Card.css'

const Card = () => {

    const pathVariable = '../../../public/images/Sreemongol.png'
    const BgImgPath = `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${pathVariable})`
    const myStyle = {
        "background":BgImgPath,
        "height": "100%",
        "backgroundSize": "cover",
    }
    return (
        <div className='p-[0.5rem] drop-shadow-xl'>
            <div style={myStyle} className="h-[100%] rounded-[1.25rem] p-[1.25rem] hover:outline-4 hover:outline-[rgb(251,188,4)] outline outline-[rgba(251,189,4,0)] text-white">
                
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            This is Card Area <br/>
            </div>
        </div>
    );
};

export default Card;