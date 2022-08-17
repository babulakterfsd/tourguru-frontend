/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Button, Typography } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function StripeForm() {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const {
        orderData,
        userInfoInDatabase,
        paymentIntentStatus,
        setPaymentIntentStatus,
        paymentTrxID,
        setPaymentTrxID,
    } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [buyingPackage, setBuyingPackage] = useState({});
    const { packageid } = useParams();
    const buyingPackageURL = `http://localhost:5000/packages/${packageid}`;

    useEffect(() => {
        axios.get(buyingPackageURL).then((result) => setBuyingPackage(result?.data));
    }, [buyingPackageURL]);

    let { price } = buyingPackage;
    price = Number(price);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: userInfoInDatabase?.displayName,
                        email: userInfoInDatabase?.email,
                    },
                },
            }
        );
        if (intentError) {
            setProcessing(false);
            setCardError(intentError?.message);
            setSuccess('');
        } else {
            setCardError('');
            setProcessing(false);
            setPaymentIntentStatus(paymentIntent?.status);
            setPaymentTrxID(paymentIntent?.id);
            setSuccess(`Congrats, Your payment is accepted, ${userInfoInDatabase?.displayName}!`);
        }
    };

    useEffect(() => {
        if (price !== undefined && typeof price === 'number' && price > 0) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ price }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data?.clientSecret) {
                        setClientSecret(data?.clientSecret);
                    }
                });
        }
    }, [price]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={!stripe || !clientSecret || success}
                    style={{ padding: '2px 15px', marginTop: '25px' }}
                >
                    Pay
                </Button>
            </form>
            {processing && (
                <Typography style={{ color: '#f3680b', margin: '10px 0px' }}>
                    processing your payment..
                </Typography>
            )}
            {cardError && (
                <Typography
                    style={{ color: '#ff0000', margin: '10px 0px' }}
                >{`${cardError}`}</Typography>
            )}
            {success && (
                <Typography
                    style={{ color: '#07c751', margin: '10px 0px' }}
                >{`${success}`}</Typography>
            )}
        </>
    );
}

export default StripeForm;
