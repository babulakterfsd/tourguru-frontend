import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
    useEffect(() => {
        document.title = 'Tourguru | About';
    });
    return (
        <div>
            <p>This is the about page</p>
            <Link to="/">
                <Button variant="contained">Home</Button>
            </Link>
        </div>
    );
}

export default About;
