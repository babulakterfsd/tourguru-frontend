/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import UsersTable from './UsersTable';

function Users() {
    const { user, allUsers, mobile } = useAuth();

    return (
        <Container>
            <ScrollToTop />
            <Box>
                <Typography color="primary" style={{ textAlign: `center` }}>
                    All Users
                </Typography>
                <Typography
                    color="bluishDark"
                    variant="h4"
                    style={{
                        textAlign: `center`,
                        fontFamily: `abril`,
                        fontWeight: `700`,
                        color: '#283A5E',
                        letterSpacing: `-1px`,
                    }}
                >
                    All Registered Users List
                </Typography>
                <Typography style={{ textAlign: `center`, fontFamily: `poppins` }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                    quaerat! Culpa, inventore.
                </Typography>
                <Box style={{ padding: mobile ? `0px` : `50px` }}>
                    <UsersTable />
                </Box>
            </Box>
        </Container>
    );
}

export default Users;
