import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    useEffect(() => {
        document.title = 'Tourguru | Not Found';
    });
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
