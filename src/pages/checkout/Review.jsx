/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';

export default function Review() {
    const { orderData, setOrderData, activeStep, setActiveStep, user } = useAuth();

    const navigate = useNavigate();
    const [buyingPackage, setBuyingPackage] = useState({});
    const { packageid } = useParams();
    const buyingPackageURL = `http://localhost:5000/packages/${packageid}`;
    const placeOrderURL = `http://localhost:5000/placeorder`;

    const placeOrder = () => {
        const options = {
            url: placeOrderURL,
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: {
                userInfo: { displayName: user?.displayName, email: user?.email },
                shippingAddress: orderData,
                selectedPackage: buyingPackage,
                status: 'pending',
            },
        };

        axios(options).then((response) => {
            if (response?.data?.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Order Confirmed! Your order id is #${response?.data?.insertedId}`,
                    showConfirmButton: false,
                    timer: 5000,
                });
            } else {
                Swal.fire(`Sorry, We failed to place the Order !`);
            }
        });
    };

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
        placeOrder();
        if (activeStep === 2) {
            setOrderData({});
        }
    };
    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    useEffect(() => {
        axios.get(buyingPackageURL).then((result) => setBuyingPackage(result?.data));
    }, [buyingPackageURL]);

    const { location, duration, price, services } = buyingPackage;

    return (
        <>
            <ScrollToTop />
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Package Name" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`${location?.city}, ${location?.country}`}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Duration" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {duration}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Our Services" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {services?.join(', ')}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="VAT" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`$${0}`}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`$${price}`}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography
                        gutterBottom
                    >{`${orderData?.firstName} ${orderData?.lastName}`}</Typography>
                    <Typography
                        gutterBottom
                    >{`${orderData?.address1},  ${orderData?.address2}`}</Typography>
                    <Typography
                        gutterBottom
                    >{`${orderData?.city}, ${orderData?.zip}, ${orderData?.state}, ${orderData?.country}`}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Typography gutterBottom>{orderData?.nameOnCard}</Typography>
                    <Typography gutterBottom>{orderData?.cardNumber}</Typography>
                    <Typography gutterBottom>{orderData?.expiryDate}</Typography>
                    <Typography gutterBottom>{orderData?.cvv}</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Box style={{ display: `flex`, justifyContent: `end` }}>
                    {activeStep <= 0 || activeStep >= 3 ? null : (
                        <Button onClick={() => handleBack()}>Back</Button>
                    )}
                    {activeStep >= 3 ? null : !orderData.nameOnCard ||
                      !orderData.cardNumber ||
                      !orderData.expiryDate ||
                      !orderData.cvv ? null : (
                        <Button variant="contained" onClick={() => handleNext()}>
                            {activeStep === 2 ? `Place Order` : `Next`}
                        </Button>
                    )}
                </Box>
            </Grid>
        </>
    );
}
