/* eslint-disable no-unused-vars */
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';

export default function AddressForm() {
    const { mobile, orderData, setOrderData } = useAuth();

    return (
        <>
            <ScrollToTop />
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                firstName: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                lastName: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                address1: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                address2: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                city: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                state: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                zip: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={(e) => {
                            setOrderData((prevState) => ({
                                ...prevState,
                                country: e.target.value,
                            }));
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                        flexDirection: mobile ? `column` : `row`,
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox name="saveAddress" value="yes" />}
                        label="Save data for next time use"
                    />
                </Grid>
            </Grid>
        </>
    );
}
