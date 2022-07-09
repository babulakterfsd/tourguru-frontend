import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';

function Login() {
    const { handleGoogleLogin } = useAuth();
    return (
        <div>
            <p>this is the login page</p>
            <Button variant="contained" onClick={handleGoogleLogin}>
                Login with Google
            </Button>
        </div>
    );
}

export default Login;
