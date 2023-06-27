import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

// TODO provide publishable key 

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price , 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading="Please process" heading="Payment" />
            <p className='text-3xl'>Taka taka</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;