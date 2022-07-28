/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const states = [
    {
        value: 'Dhaka',
        label: 'Dhaka',
    },
    {
        value: 'Rajshahi',
        label: 'Rajshahi',
    },
    {
        value: 'Dinajpur',
        label: 'Dinajpur',
    },
    {
        value: 'Rangpur',
        label: 'Rangpur',
    },
    {
        value: 'Mymensing',
        label: 'Mymensing',
    },
    {
        value: 'Sylhet',
        label: 'Sylhet',
    },
    {
        value: 'Khulna',
        label: 'Khulna',
    },
    {
        value: 'Barisal',
        label: 'Barisal',
    },
    {
        value: 'Chittagong',
        label: 'Chittagong',
    },
];

export default function ProfileDetails(props) {
    const {user} = useAuth()
    
    const [values, setValues] = useState({
        name: user?.displayName,
        email: user?.email,
        phone: '',
        City: 'Dhaka',
        country: 'Bangladesh',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form autoComplete="off" noValidate {...props}>
            <Card>
                <CardHeader subheader="Name and email are not editable" title="Profile" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                helperText="Please specify the name"
                                label="Name"
                                name="name"
                                onChange={handleChange}
                                required
                                value={values?.name}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                onChange={handleChange}
                                required
                                placeholder='Jinjirtala, Dhunat Pouroshava, Dhunat, Bogura'
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                onChange={handleChange}
                                required
                                value={values.country}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Select City"
                                name="city"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.city}
                                variant="outlined"
                            >
                                {states.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                    }}
                >
                    <Button color="primary" variant="contained"  title='updating profile is not avilable now'>
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    );
}
