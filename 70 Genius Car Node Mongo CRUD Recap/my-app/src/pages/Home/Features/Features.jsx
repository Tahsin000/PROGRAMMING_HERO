import React from 'react';
import FeatureCard from './FeatureCard';

import Wrench from '../../../assets/icons/Wrench.svg'
import person from '../../../assets/icons/person.svg'
import delivery from '../../../assets/icons/delivery.svg'
import group from '../../../assets/icons/group.svg'
import guranty from '../../../assets/icons/guranty.svg'
import deliveryt from '../../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='my-12'>
            <div className="text-center space-y-3 my-4">
                <h3 className='text-xl font-bold text-orange-500'>Core Features</h3>
                <h1 className='text-4xl font-bold '>Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br/> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <FeatureCard img={group} title="Expert Team" />
                <FeatureCard img={delivery} title="Timely Delivery" />
                <FeatureCard img={person} title="24/7 Support" />
                <FeatureCard img={Wrench} title="Best Equipment" />
                <FeatureCard img={guranty} title="100% Guranty" />
                <FeatureCard img={deliveryt} title="Timely Delivery" />
            </div>
        </div>
    );
};

export default Features;