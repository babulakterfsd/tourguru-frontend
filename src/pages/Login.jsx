import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { handleGoogleLogin } = useAuth();

    return (
        <div>
            <p>this is the login page</p>
            <button type="button" onClick={() => handleGoogleLogin()}>
                Login with Google
            </button>

            <Link to="/">
                <Button variant="contained">Home</Button>
            </Link>
        </div>
    );
}

export default Login;
