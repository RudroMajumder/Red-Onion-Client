import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './CardForm';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const ProcessPayment = ({handlePayment}) => {
    return (
            <Elements stripe={stripePromise}>
                <CardForm handlePayment={handlePayment}/>
            </Elements>
    );
};

export default ProcessPayment;