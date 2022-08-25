/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from '@mui/material';
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
                    <Typography
                        variant="h5"
                        style={{ color: '#1a213d' }}
                        data-aos="flip-left"
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
                <MyOrderTable />
            </Box>
        </Container>
    );
}

export default MyOrders;
