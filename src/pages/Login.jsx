/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { LockOutlined } from '@mui/icons-material';
import Google from '@mui/icons-material/Google';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel, TextField,
    Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Styles from '../styles/Login.module.css';

function Login() {
    const { mobile, handleGoogleLogin } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
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
                height: mobile ? `auto`: `100vh`,
            }}
        >
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
                        <LockOutlined color='#1a213d' />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontFamily='abril' color="#283A5E">
                        Please, LogIn !
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className={Styles.customTextField}
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
                        />
                        <div style={{display: `flex`, justifyContent: `space-between`, alignItems: `center`}}>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
                          <Link to="/" style={{textDecoration: `none`, color: `#f3680b`}}>
                                Forgot password?
                          </Link>
                        </div>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
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
                            <div>
                                <Typography variant='p' mr={1}> Dont have an account?</Typography>
                                <Link to="/register" style={{textDecoration: `none`, color: `#f3680b`}}>
                                    Sign Up!
                                </Link>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Login;
