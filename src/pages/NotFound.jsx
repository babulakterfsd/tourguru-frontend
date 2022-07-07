import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <p>page not found</p>
            <Link to="/">
                <Button variant="contained">back to home</Button>
            </Link>
        </div>
    );
}

export default NotFound;
