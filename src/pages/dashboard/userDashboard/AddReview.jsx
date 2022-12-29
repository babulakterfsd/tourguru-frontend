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

function AddReview() {
   const {mobile, tablet, desktop, user} = useAuth()

   const navigate = useNavigate()

   const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const addReview = (review) => {

    const reviewDetails = review

    fetch(`https://tourguruapi.itbangla24.xyz/review/${user?.email}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(reviewDetails)
      })
      .then(res => res.json())
       .then(data => {
           if(data.insertedId) {
            Swal.fire('Thanks for your feedback !')
            reset()
           }
       })
   }

    return (
        <div
            style={{
                padding: mobile ? `0px` : `0px 100px`,
            }}
            data-aos="fade-down" data-aos-duration="1500"
        >
            <ScrollToTop />
            <Container component="main" maxWidth='md' style={{background: `#fff`, borderRadius: `5px`}}> 
                <Paper
                    sx={{
                        padding: mobile ? `20px 8px` : `30px 15px`,
                        
                    }}
                >
                    
                    <Typography color="#f3680b">
                        Give Us Your Honest Feedback, please !
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(addReview)} noValidate sx={{ mt: 1 }}>
                    <Box style={{display: `flex`, justifyContent: `space-between`, alignItems: `center`, flexDirection: mobile ? `column` : `row`}}>
                    <TextField
                            margin="normal"
                            id="name"
                            label="Name"
                            name="name"
                            className={Styles.customTextField}
                            value={user?.displayName}
                            {...register("name", { required: true })}
                        />
                    <TextField
                            margin="normal"
                            id="email"
                            label="Email"
                            name="email"
                            value={user?.email}
                            className={Styles.customTextField}
                            {...register("email", { required: true })}
                        />
                    <select
                        required
                        style={{width: mobile ? `100%` : `150px`, height: `55px`, marginTop: '6px', border: `1px solid #ccc`, textAlign: `center`}}
                        {...register("rating")}>
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1.5">1.5</option>
                        <option value="1">1</option>
                        </select>
                    </Box>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            name="comment"
                            label="Your Comment"
                            type="comment"
                            id="comment"
                            autoComplete="current-password"
                            className={Styles.customTextField}
                            {...register("comment", { required: true })}
                        />
                        
                        <Box style={{textAlign: `right`}}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Review
                        </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default AddReview;