import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
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
