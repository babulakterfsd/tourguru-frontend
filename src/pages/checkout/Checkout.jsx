/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Button } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ThanksForOrder from './ThanksForOrder';

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const { mobile, orderData } = useAuth();

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <>
            <ScrollToTop />
            <CssBaseline />
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 5 } }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        style={{ fontFamily: `abril` }}
                    >
                        {activeStep >= 3 ? `Order Placed Successfully !` : `Checkout`}
                    </Typography>
                    {activeStep === 0 ? (
                        <AddressForm />
                    ) : activeStep === 1 ? (
                        <PaymentForm />
                    ) : activeStep === 2 ? (
                        <Review />
                    ) : (
                        <ThanksForOrder />
                    )}
                    <Box style={{ display: `flex`, justifyContent: `end` }}>
                        {activeStep <= 0 || activeStep >= 3 ? null : (
                            <Button onClick={() => handleBack()}>Back</Button>
                        )}
                        {activeStep >= 3 ? null : !orderData.firstName ||
                          !orderData.lastName ||
                          !orderData.address1 ||
                          !orderData.address2 ||
                          !orderData.city ||
                          !orderData.state ||
                          !orderData.zip ||
                          !orderData.country ? null : (
                            <Button variant="contained" onClick={() => handleNext()}>
                                {activeStep === 2 ? `Place Order` : `Next`}
                            </Button>
                        )}
                    </Box>
                </Paper>
            </Container>
        </>
    );
}
