import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import notfoundImg from '../../../assests/images/notfound.svg';
import useAuth from '../../../hooks/useAuth';

function NotFoundInDashboard() {
    const { mobile, userInfoInDatabase } = useAuth();
    return (
        <Container>
            <Box
                style={{
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
                        <small>
                            Sorry{' '}
                            <span style={{ color: '#f3680b' }}>
                                {userInfoInDatabase?.displayName}
                            </span>
                            ,
                        </small>
                    </Typography>
                    <Typography variant="h5">404! Page Not Found !!</Typography>
                </div>
            </Box>
        </Container>
    );
}

export default NotFoundInDashboard;
