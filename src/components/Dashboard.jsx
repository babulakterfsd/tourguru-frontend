import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <p>This is dashboard</p>
            <Link to="/">
                <Button variant="contained">Go Back to Home</Button>
            </Link>
        </div>
    );
}

export default Dashboard;
