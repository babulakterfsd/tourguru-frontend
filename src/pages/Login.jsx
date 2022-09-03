/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
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
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../components/ScrollToTop';
import useAuth from '../hooks/useAuth';
import useToken from '../hooks/useToken';
import Styles from '../styles/Login.module.css';

function Login() {
  const {
    mobile,
    tablet,
    user,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    signInWithEmailAndPassword,
    auth,
    setUser,
    setResponse,
    response,
    signInUsingGoogle,
    setIsLoading,
    setActiveStep,
  } = useAuth();
  const location = useLocation();
  const targetURL = location?.state || '/dashboard';
  const navigate = useNavigate();
  const [token] = useToken(user);

  useEffect(() => {
    document.title = 'Tourguru | Login';
  });

  useEffect(() => {
    if (token) {
      navigate(targetURL, { replace: true });
    }
  }, [navigate, targetURL, token]);

  const saveUser = (email, displayName) => {
    const myUser = { email, displayName };
    fetch('https://rocky-inlet-29740.herokuapp.com/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(myUser),
    })
      .then()
      // .catch((err) => console.log(err));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // login(userEmail, userPassword)
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((result) => {
        const myUser = result.user;
        setUser(myUser);
        setResponse('Login Successfull');
        setActiveStep(0);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Login Successfull`,
          showConfirmButton: false,
          timer: 2500,
        });
        // navigate(targetURL);
        setResponse('');
      })
      .catch((error) => {
        setResponse('Error happened !');
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Login Failed!`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  // signin using google
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result?.user);
        Swal.fire(`Login Successfull !`);
        saveUser(result?.user?.email, result?.user?.displayName);
        setActiveStep(0);
        navigate(targetURL);
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire(`Login Failed !`);
      });
    setIsLoading(false);
  };

  // send password reset email
  const handleSendPasswordResetEmail = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        Swal.fire('Password Reset Email Sent');
      })
      .catch((error) => {
        Swal.fire('Sorry, Something is wrong');
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
        height: mobile ? `auto` : tablet ? `auto` : `115vh`,
      }}
    >
      <ScrollToTop />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          background: `#fff`,
          borderRadius: `5px`,
          margin: mobile ? `50px 0px` : `180px 0px`,
        }}
      >
        <Box
          sx={{
            padding: mobile ? `20px 8px` : `30px 15px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#E46F44' }}>
            <LockOutlined color="#1a213d" />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            fontFamily="abril"
            color="#283A5E"
          >
            Please, LogIn !
          </Typography>
          <Typography
            component="p"
            color="#283A5E"
            style={{ textAlign: 'center', margin: '15px 0px' }}
          >
            (To Login as Admin, use{' '}
            <span style={{ color: '#f3680b' }}>babulakterfsd@gmail.com</span> as email
            and <span style={{ color: '#f3680b' }}>123456</span> as password.
            Please, don&#39;t misuse the power)
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <div
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button onClick={() => handleSendPasswordResetEmail()}>
                Forgot password?
              </Button>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <div
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`,
                }}
              >
                <Typography variant="p" mr={1}>
                  {' '}
                  Or Signin Using Google
                </Typography>
                <Button onClick={handleGoogleLogin}>
                  <Google style={{ height: `40px`, width: `40px` }} />
                </Button>
              </div>
            </div>
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                marginTop: mobile ? `30px` : `50px`,
              }}
            >
              <div style={{ textAlign: mobile ? `center` : `left` }}>
                <Typography variant="p" mr={1}>
                  {' '}
                  Dont have an account?
                </Typography>
                <Link
                  to="/register"
                  style={{ textDecoration: `none`, color: `#f3680b` }}
                >
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
