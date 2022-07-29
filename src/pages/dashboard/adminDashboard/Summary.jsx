import { Container, Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import PendingOrders from './summary/PendingOrders';
import TasksProgress from './summary/TaskProgress';
import TotalCustomers from './summary/TotalCustomer';
import TotalProfit from './summary/TotalProfit';

function Summary() {
    const { mobile } = useAuth();
    return (
        <Container style={{ padding: mobile ? `0px` : `0px 75px` }}>
            <Container>
                <Grid container spacing={{ xs: 3, lg: 5 }}>
                    <Grid item xs={12} md={6} lg={4}>
                        <PendingOrders />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalCustomers />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TasksProgress />
                    </Grid>
                </Grid>
            </Container>

            <Container style={{ marginTop: mobile ? `50px` : `120px` }}>
                <Grid container spacing={{ xs: 3, md: 5 }}>
                    <Grid item xs={12} md={6} lg={4} style={{ margin: `0px auto` }}>
                        <TotalProfit />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Summary;
