import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = ()=>{
        setSteps (steps+1);
    }
    useEffect(()=>{
        console.log(steps);
    },[steps]);
    return (
        <div>
            <h1>This is my smart Watch</h1>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour.....</button>
        </div>
    );
};

export default Watch;