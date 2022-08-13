import { Box, Container } from '@mui/material';
import React from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import UsersTable from './UsersTable';

function Users() {
    const { mobile } = useAuth();

    return (
        <Container>
            <ScrollToTop />
            <Box
                style={{
                    padding: mobile ? `0px` : `0px 150px`,
                }}
            >
                <UsersTable />
            </Box>
        </Container>
    );
}

export default Users;
