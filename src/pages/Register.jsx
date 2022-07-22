/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Google from '@mui/icons-material/Google';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
    Avatar,
    Box,
    Button, Container, TextField,
    Typography
} from '@mui/material';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../components/ScrollToTop';
import useAuth from '../hooks/useAuth';
import Styles from '../styles/Login.module.css';

function Register() {
    const { mobile, tablet, handleGoogleLogin,userEmail, userPassword, setUserEmail, setUserPassword, registerWithEmail, setUser, setResponse,name, setName, updateUser, response, user } = useAuth();

    const location = useLocation();
    const targetURL = location.state || '/dashboard';
    const navigate = useNavigate()

    if(user) {
        return navigate('/')
      }

      // save user data to the mongodb database
  const saveUser = (email) => {
    const myUser = {email};
    fetch("http://localhost:5000/users", {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myUser),
    }).then().catch(err => console.log(err))
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        // register function
        registerWithEmail(userEmail, userPassword)
        .then((result) => {
         updateUser()
          const myUser = result.user;
          setUser(myUser);
          setResponse("Registration Successful");
        //   saveUser(userEmail)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Registration Successful !`,
            showConfirmButton: false,
            timer: 1000
          })
        //   history.push(redirect);
          setResponse("");
        //   setTimeout(() => navigate('/'), 3000);
           saveUser(userEmail)
           navigate(targetURL)
        })
        .catch((error) => {
          setResponse(error.message);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `Something Error Happened, Try Again!`,
            showConfirmButton: false,
            timer: 2500
          })
          console.log(error);
        });
    };


    return (
        <div
            className={Styles.loginPage}
            style={{
                padding: mobile ? `50px 15px` : `180px 15px`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                height: mobile ? `auto`: tablet ? `auto` : `100vh`,
            }}
        >
            <ScrollToTop />
            <Container component="main" maxWidth="xs" style={{background: `#fff`, borderRadius: `5px`}}> 
                <Box
                    sx={{
                        padding: mobile ? `20px 8px` : `30px 15px`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#E46F44' }}>
                        <HowToRegIcon color='#1a213d' />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontFamily='abril' color="#283A5E">
                        Create Your Account !
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nameofuser"
                            label="Your Name"
                            name="nameofuser"
                            autoComplete="nameofuser"
                            autoFocus
                            className={Styles.customTextField}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="mymail"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            className={Styles.customTextField}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className={Styles.customTextField}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                        
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`}}>
                            <div  style={{display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column`}}>
                                <Typography variant='p' mr={1}> Or Signin Using Google</Typography>
                                <Button onClick={handleGoogleLogin}>
                                   <Google  style={{height: `40px`, width: `40px`}}/>
                                </Button>
                            </div>
                        </div>
                        <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: mobile ? `30px` : `50px`}}>
                            <div style={{textAlign: mobile ? `center` : `left`}}>
                                <Typography variant='p' mr={1}> Already have an account?</Typography>
                                <Link to="/login" style={{textDecoration: `none`, color: `#f3680b`}}>
                                    LogIn Here!
                                </Link>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Register;
