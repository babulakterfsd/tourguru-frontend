/* eslint-disable no-unused-vars */
import { Box, Container } from '@mui/material';
import React from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import PackageTable from './PackagesTable';

function AllPackages() {
    const { user, allUsers, mobile } = useAuth();

    return (
        <Container>
            <ScrollToTop />
            <Box
                style={{
                    padding: mobile ? `0px` : `0px 150px`,
                }}
            >
                <PackageTable />
            </Box>
        </Container>
    );
}

export default AllPackages;
