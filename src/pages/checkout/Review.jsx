/* eslint-disable no-unused-vars */
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';

export default function Review() {
    const [buyingPackage, setBuyingPackage] = useState({});
    const { packageid } = useParams();
    const buyingPackageURL = `http://localhost:5000/packages/${packageid}`;

    useEffect(() => {
        axios.get(buyingPackageURL).then((result) => setBuyingPackage(result?.data));
    }, [buyingPackageURL]);

    const { location, duration, price, img, services, description } = buyingPackage;

    console.log(services);

    return (
        <>
            <ScrollToTop />
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Package Name" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`${location?.city}, ${location?.country}`}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Duration" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {duration}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Our Services" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {services?.join(', ')}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="VAT" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`$${0}`}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`$${price}`}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    {/* <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
