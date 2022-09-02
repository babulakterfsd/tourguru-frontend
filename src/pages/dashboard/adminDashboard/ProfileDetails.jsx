/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import { sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const genderoptions = ['Male', 'Female', 'Other'];

export default function ProfileDetails(props) {
  const { user, userInfoInDatabase, setUserInfoInDatabase, mobile, auth } = useAuth();
  const { email } = user;
  const [gender, setGender] = useState('male');
  const { register, control, handleSubmit, reset } = useForm();

  const [values, setValues] = useState({
    name: user?.displayName,
    email: user?.email,
    phone: '',
    City: 'Dhaka',
    country: 'Bangladesh',
  });

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const updateProfile = (data) => {
    const myUser = { email, ...data };
    fetch(`https://rocky-inlet-29740.herokuapp.com/updateuser/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(myUser),
    })
      .then((res) => res.json())
      .then((myData) => {
        if (myData?.modifiedCount > 0) {
          axios.get(`https://rocky-inlet-29740.herokuapp.com/user/${user?.email}`).then((result) => {
                    setUserInfoInDatabase(result?.data);
                });
          Swal.fire('Profile updated successfully');
          reset();
        }
      })
      // .catch((err) => console.log(err.message));
  };

  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
  .then(() => {
    Swal.fire(`Email sent. Check spam folder if you don't see it.`);
  }).catch(() => Swal.fire(`Something is wrong`));
  }

  return (
    <Card style={{ margin: mobile ? '30px 0px' : '0px' }}>
      <Box component="form" onSubmit={handleSubmit(updateProfile)} noValidate>
        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <CardHeader
          subheader="You can't change your email"
          title="Update Profile"
        />
        <Typography style={{marginRight: '10px'}}>
          <span style={{margin: '0px 5px 8px 0px'}}>{user?.email}</span>
          <small style={{ color: '#3b5' }}>
            {user?.emailVerified && '(verified)'}
          </small>
          <small style={{ color: '#f3680b', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => verifyEmail()}>
            {!user?.emailVerified && '(unverified)'}
          </small>
        </Typography>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                placeholder={userInfoInDatabase?.displayName}
                variant="outlined"
                {...register('displayName', { required: true })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                select
                fullWidth
                label="Gender"
                defaultValue=""
                inputProps={register('gender', {
                  required: 'Please enter gender',
                })}
              >
                {genderoptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                required
                placeholder="Jinjirtala, Dhunat Pouroshava, Dhunat, Bogura"
                variant="outlined"
                {...register('address', { required: true })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                type="number"
                variant="outlined"
                {...register('phone', { required: true })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                required
                variant="outlined"
                {...register('city', { required: true })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                required
                variant="outlined"
                {...register('country', { required: true })}
              />
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
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
