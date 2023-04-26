// eslint-disable-next-line no-unused-vars
import React from 'react';
import qzone1 from '../../../assets/my-assets/qZone1.png'
import qzone2 from '../../../assets/my-assets/qZone2.png'
import qzone3 from '../../../assets/my-assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;