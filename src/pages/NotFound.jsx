import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../assests/images/notfound.svg';
import useAuth from '../hooks/useAuth';

function NotFound() {
    const { mobile } = useAuth();
    useEffect(() => {
        document.title = 'Tourguru | Not Found';
    });
    return (
        <Container>
            <Box
                style={{
                    minHeight: '85vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={notfoundImg}
                        alt="404"
                        style={{
                            height: mobile ? '120px' : '350px',
                            width: mobile ? '120px' : '350px',
                        }}
                    />
                    <Typography variant="h6">
                        <small>Sorry TourGuru Lover,</small>
                    </Typography>
                    <Typography variant="h3">404! Page Not Found !!</Typography>
                    <Box style={{ margin: '20px 0px' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button type="button" variant="contained">
                                Go Back to Home
                            </Button>
                        </Link>
                    </Box>
                </div>
            </Box>
        </Container>
    );
}

export default NotFound;
