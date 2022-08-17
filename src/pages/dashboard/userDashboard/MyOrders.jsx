/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Box, Container, Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import MyOrderTable from './MyOrderTable';

function MyOrders() {
    const { user, allUsers, mobile } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const getMyOrdersURL = `http://localhost:5000/myorders/${user?.email}`;
    useEffect(() => {
        axios.get(getMyOrdersURL).then((result) => setMyOrders(result?.data));
    }, [getMyOrdersURL]);

    if (myOrders?.length === 0) {
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
                                    <Grid item xs={12}>
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

    return (
        <Container>
            <ScrollToTop />
            <Box
                style={{
                    padding: mobile ? `0px` : `0px 50px`,
                }}
            >
                <MyOrderTable />
            </Box>
        </Container>
    );
}

export default MyOrders;
