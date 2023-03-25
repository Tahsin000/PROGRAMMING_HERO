import React from 'react';
import { add, multiply } from '../utilities/calcilate';


const Shoes = () => {
    const first = 10;
    const second = 20;
    const result = add(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>sum : {result}</p>
            <p>multiply : {multiply(2, 5)}</p>
        </div>
    );
};

export default Shoes;