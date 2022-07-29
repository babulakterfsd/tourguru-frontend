/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';

function ThanksForOrder() {
    const { orderData, activeStep, setActiveStep } = useAuth();
    const [seconds, setSeconds] = useState(10);
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        setActiveStep(4);

        setTimeout(() => {
            if (activeStep === 4) {
                setActiveStep(0);
                navigate('/dashboard');
            }
        }, 10000);
    }, [navigate, activeStep, setActiveStep]);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    }, [seconds]);

    return (
        <div>
            <ScrollToTop />
            <Box style={{ textAlign: `center`, padding: `25px 0px` }}>
                <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                    We have emailed your order confirmation, and will send you an update when your
                    order has shipped.You can track your order in the dashboard.
                </Typography>
                <Box style={{ textAlign: `center`, margin: `50px 0px` }}>
                    <Typography variant="subtitle2" style={{ color: `#f3680b` }}>
                        You will be redirected to the dashboard automatically {` ${seconds} `}
                        seconds later
                    </Typography>
                </Box>
            </Box>
            <Box style={{ marginTop: '50px', display: `flex`, justifyContent: `center` }}>
                <Link to="/dashboard" style={{ textDecoration: `none` }}>
                    <Button variant="contained">See Order Status</Button>
                </Link>
            </Box>
        </div>
    );
}

export default ThanksForOrder;
