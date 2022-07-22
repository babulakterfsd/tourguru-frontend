/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SinglePackageCard from '../components/SinglePackageCard';
import useAuth from '../hooks/useAuth';

function Packages() {
    const { mobile, tablet, desktop, allPackages } = useAuth();

    return (
        <div
            style={{
                minHeight: `90vh`,
                background: `#f5fbf9`,
                padding: mobile ? `50px 10px` : `80px 10px`,
            }}
        >
            <ScrollToTop />
            <Container>
                <Typography color="primary" style={{ textAlign: `center` }}>
                    All Packages
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
                    Our All Packages
                </Typography>
                <Typography style={{ textAlign: `center`, fontFamily: `poppins` }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                    quaerat! Culpa, inventore. Doloribus praesentium dicta repellendus tempora
                    eligendi maxime odio soluta quae in, architecto modi maiores quas facere?
                </Typography>
                <Box style={{ padding: mobile ? `40px 0px` : `80px 0px` }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3, lg: 5 }}
                        columns={{ xs: 12, md: 12, lg: 12 }}
                    >
                        {allPackages?.map((singlePackage, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <SinglePackageCard singlePackage={singlePackage} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default Packages;
