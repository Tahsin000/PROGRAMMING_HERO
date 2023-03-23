import React from 'react';
import Knob from '../../49-4 (advanced) How states works, asynchronous, console state/Watch/Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple', margin:'10px', padding:'30px'}}>
            Your Steps Count: {props.steps}
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;