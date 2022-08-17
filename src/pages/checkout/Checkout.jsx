/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ThanksForOrder from './ThanksForOrder';

export default function Checkout() {
    const { mobile, orderData, activeStep } = useAuth();

    return (
        <>
            <ScrollToTop />
            <CssBaseline />
            <Container
                component="main"
                maxWidth="md"
                sx={{ mb: 4 }}
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
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
                </Paper>
            </Container>
        </>
    );
}
