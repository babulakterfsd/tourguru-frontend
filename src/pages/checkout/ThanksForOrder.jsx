import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ThanksForOrder() {
    return (
        <div>
            <p>Thanks for the order</p>
            <Box style={{ display: `flex`, justifyContent: `center` }}>
                <Link to="/dashboard" style={{ textDecoration: `none` }}>
                    <Button variant="contained">See Order Status</Button>
                </Link>
            </Box>
        </div>
    );
}

export default ThanksForOrder;
