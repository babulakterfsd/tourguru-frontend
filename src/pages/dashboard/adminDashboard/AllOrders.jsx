/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import AllOrderTable from './AllOrderTable';

function AllOrders() {
    const { mobile } = useAuth();
    const [allOrders, setAllOrders] = useState(null);

    const getAllOrdersURL = `https://tourguru.onrender.com/allorder`;
    useEffect(() => {
        axios.get(getAllOrdersURL).then((result) => setAllOrders(result?.data));
    }, [getAllOrdersURL]);

    if (!Array.isArray(allOrders)) {
        return (
            <Container>
                <Box
                    style={{
                        height: `100vh`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        margin: mobile ? `100px 0px` : `180px 15px`,
                    }}
                >
                    {mobile ? (
                        <>
                            <ScrollToTop />
                            <Grid container spacing={3}>
                                {Array.from(Array(3)).map((packages, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Skeleton
                                            variant="rectangular"
                                            style={{
                                                width: `100%`,
                                                height: mobile ? `150px` : `210px`,
                                            }}
                                        />
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    ) : (
                        <Grid container spacing={5}>
                            {Array.from(Array(9)).map((packages, index) => (
                                <Grid item md={6} lg={4} key={index}>
                                    <Skeleton
                                        variant="rectangular"
                                        style={{
                                            width: `100%`,
                                            height: mobile ? `150px` : `210px`,
                                        }}
                                    />
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Container>
        );
    }

    if (Array.isArray(allOrders) && allOrders?.length === 0) {
        return (
            <Container>
                <Box
                    style={{
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        margin: mobile ? `100px 0px` : `180px 15px`,
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ color: '#1a213d' }}
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        No Order Found
                    </Typography>
                </Box>
            </Container>
        );
    }

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
