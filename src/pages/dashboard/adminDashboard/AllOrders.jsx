/* eslint-disable no-unused-vars */
import { Box, Container } from '@mui/material';
import React from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import AllOrderTable from './AllOrderTable';

function AllOrders() {
    const { user, allUsers, mobile } = useAuth();

    return (
        <Container>
            <ScrollToTop />
            <Box
                style={{
                    padding: mobile ? `0px` : `0px 50px`,
                }}
            >
                <AllOrderTable />
            </Box>
        </Container>
    );
}

export default AllOrders;
