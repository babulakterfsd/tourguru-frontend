/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
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
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import Styles from '../../../styles/Login.module.css';

function AddNewpackage() {
   const {mobile, tablet, desktop} = useAuth()
   const [newPackageImage,setNewPackageImage] = useState({})
   const [imageURL, setImageURL] = useState('')

   const navigate = useNavigate()

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const handleImageUpload = (e) => {
    const image = e.target.files[0]
    const formData = new FormData()
    formData.set("image", image)
    const imageStorageAPIKey = `99f27926739ee425304cd99a6447e360`
    const imgUploadURL = `https://api.imgbb.com/1/upload?key=${imageStorageAPIKey}`
    axios.post(imgUploadURL, formData)
        .then((res) => {
            setImageURL(res?.data?.data?.display_url)
        }).catch((error) => {
            // console.log(error);
            Swal.fire(`Something went wrong when choosing image`)
        })
}

   const addPackage = (pack) => {
    let packageDetails = pack
    packageDetails.services = ['Hotel Room', 'Food', 'Tour Guide', 'Travel Zeep', 'Security']
    const packageLocation = {city: packageDetails.city, country: packageDetails.country}
    packageDetails.location = packageLocation
    delete packageDetails.city
    delete packageDetails.country

    packageDetails = {...packageDetails, img: imageURL}
      
    if(imageURL !== '') {
        fetch('https://rocky-inlet-29740.herokuapp.com/addpackage', {
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
            }, 1500)
           }
       })
   }
}

    return (
        <div
            style={{
                padding: mobile ? `0px` : `0px 100px`,
            }}
        >
            <ScrollToTop />
            <Container component="main" maxWidth='md' style={{background: `#fff`, borderRadius: `5px`}} data-aos="zoom-in" data-aos-duration="1500"> 
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
                            type="file"
                            margin="normal"
                            required
                            fullWidth
                            id="photourl"
                            name="photourl"
                            className={Styles.customTextField}
                            {...register("img", { required: true })}
                            onChange={(e) => handleImageUpload(e)}
                        />
                        {
                            imageURL !== '' ? (<Box style={{textAlign: `center`}}>
                            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Add Package
                            </Button>
                            </Box>) : (<Box style={{textAlign: `center`}}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} disabled>
                            Add Package
                        </Button>
                        </Box>)
                        }
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default AddNewpackage;

