/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import {
    Box,
    Button,
    Card,
    Grid,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';
import StripeForm from './StripeForm';

const stripePromise = loadStripe(
    'pk_test_51JwINYCr7RqfY75BoFkzy5YudExXmB6KnbiYD0HNNHZwWp4oQ0Wa41CkWgrIZCU2k37L7fAUiBs2ULpMMlpf4eoS00yNuTBDVo'
);

function PaymentForm() {
    return (
        <Elements stripe={stripePromise}>
            <MypaymentForm />
        </Elements>
    );
}

function MypaymentForm() {
    const { setOrderData, orderData, activeStep, setActiveStep, paymentIntentStatus } = useAuth();

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <div data-aos="zoom-in" data-aos-duration="1500">
            <ScrollToTop />
            <Typography variant="h6" gutterBottom>
                Please pay the bill !
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card style={{ padding: '25px 15px' }}>
                        <StripeForm />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        style={{
                            display: `flex`,
                            justifyContent: `end`,
                            alignItems: `center`,
                        }}
                    >
                        {activeStep <= 0 ||
                        activeStep >= 3 ||
                        paymentIntentStatus === 'succeeded' ? null : (
                            <Button onClick={() => handleBack()}>Back</Button>
                        )}
                        {activeStep >= 3 ? null : paymentIntentStatus !== 'succeeded' ? (
                            <Typography
                                variant="subtitle1"
                                style={{ color: `#f3680b`, cursor: `wait` }}
                            >
                                waiting for payment
                            </Typography>
                        ) : (
                            <Button variant="contained" onClick={() => handleNext()}>
                                {activeStep === 2 ? `Place Order` : `Next`}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default PaymentForm;
