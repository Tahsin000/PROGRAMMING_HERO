import React from 'react';
import Cusin from '../Cusin/Cusin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin hasFriend={true} >Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;