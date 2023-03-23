import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <p>Information about your device</p>
            <small>Price : {props.price}</small>
        </div>
    );
};

export default DeviceDetails;