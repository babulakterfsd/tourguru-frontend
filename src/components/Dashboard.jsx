/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <p>This is dashboard</p>
            <Link to="/" style={{ textDecoration: `none` }}>
                <Button variant="contained">Go Back to Home</Button>
            </Link>
        </div>
    );
}

export default Dashboard;
