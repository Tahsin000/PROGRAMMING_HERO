import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useCard from '../../../../hooks/useCard';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

    const [card, refetch] = useCard();
    const total = card.reduce((sum, item) => parseFloat(item.price) + sum, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle title="Payment" />
            <Helmet>
                <title>Payment | Inkwell Studio</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                {/* This is Cart section */}
                <CheckoutForm price={price} card={card}/>
            </Elements>
        </div>
    );
};

export default Payment;