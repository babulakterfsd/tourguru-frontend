import MailIcon from '@mui/icons-material/Mail';
import { Badge, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <p>This is the homepage</p>
            <Button variant="contained">Hello</Button>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
            <Link to="/about">
                <Button variant="contained">About</Button>
            </Link>
            <Link to="/login">
                <Button variant="contained">Login</Button>
            </Link>
        </div>
    );
}

export default Home;
