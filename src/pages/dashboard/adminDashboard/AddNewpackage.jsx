/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
    Box,
    Button, Container, Paper, TextField,
    Typography
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import Styles from '../../../styles/Login.module.css';

function AddNewpackage() {
   const {mobile, tablet, desktop} = useAuth()

   const navigate = useNavigate()

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const addPackage = (pack) => {

    const packageDetails = pack

    packageDetails.services = ['Hotel Room', 'Food', 'Tour Guide', 'Travel Zeep', 'Security']

    const packageLocation = {city: packageDetails.city, country: packageDetails.country}
    packageDetails.location = packageLocation

    delete packageDetails.city
    delete packageDetails.country

    fetch('http://localhost:5000/addpackage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(packageDetails)
      })
      .then(res => res.json())
       .then(data => {
           if(data.insertedId) {
            Swal.fire(
              'Package Added Successfully !'
            )
            setTimeout(() => {
                navigate('/dashboard/summary')
            }, 3000)
           }
       })
   }

    return (
        <div
            style={{
                padding: mobile ? `0px` : `0px 100px`,
            }}
        >
            <ScrollToTop />
            <Container component="main" maxWidth='md' style={{background: `#fff`, borderRadius: `5px`}}> 
                <Paper
                    sx={{
                        padding: mobile ? `20px 8px` : `30px 15px`,
                        
                    }}
                >
                    
                    <Typography color="#f3680b">
                        Add A New Package
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(addPackage)} noValidate sx={{ mt: 1 }}>
                    <Box style={{display: `flex`, justifyContent: `space-between`, alignItems: `center`, flexDirection: mobile ? `column` : `row`}}>
                    <TextField
                            margin="normal"
                            required
                            id="city"
                            label="City"
                            name="city"
                            autoComplete="city"
                            autoFocus
                            className={Styles.customTextField}
                            {...register("city", { required: true })}
                        />
                    <TextField
                            margin="normal"
                            required
                            id="country"
                            label="country"
                            name="country"
                            autoComplete="country"
                            className={Styles.customTextField}
                            {...register("country", { required: true })}
                        />
                    <TextField
                            margin="normal"
                            required
                            id="price"
                            label="price"
                            name="price"
                            autoComplete="price"
                            className={Styles.customTextField}
                            {...register("price", { required: true })}
                        />
                    </Box>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="duration"
                            label="Duration"
                            type="duration"
                            id="duration"
                            autoComplete="current-password"
                            className={Styles.customTextField}
                            {...register("duration", { required: true })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            autoComplete="description"
                            className={Styles.customTextField}
                            {...register("description", { required: true })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="photourl"
                            label="Photo URL"
                            name="photourl"
                            autoComplete="photourl"
                            className={Styles.customTextField}
                            placeholder="https://i.ibb.co/QjWGB86/istanbul.jpg"
                            {...register("img", { required: true })}
                        />
                        
                        
                        <Box style={{textAlign: `center`}}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Package
                        </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default AddNewpackage;

