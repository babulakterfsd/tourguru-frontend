/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SinglePackageCard from './SinglePackageCard';

function Packages() {
    const { mobile, tablet, desktop, popularPackages } = useAuth();

    return (
        <div
            style={{
                minHeight: `90vh`,
                background: `#f5fbf9`,
                padding: mobile ? `50px 10px` : `80px 10px`,
            }}
        >
            <Container>
                <Typography color="primary" style={{ textAlign: `center` }}>
                    Popular Packages
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
                    Our Popular Packages
                </Typography>
                <Typography style={{ textAlign: `center`, fontFamily: `poppins` }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                    quaerat! Culpa, inventore. Doloribus praesentium dicta repellendus tempora
                    eligendi maxime odio soluta quae in, architecto modi maiores quas facere?
                </Typography>
                <Box style={{ padding: mobile ? `40px 0px` : `80px 0px 20px 0px` }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3, lg: 5 }}
                        columns={{ xs: 12, md: 12, lg: 12 }}
                    >
                        {popularPackages?.map((singlePackage, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <SinglePackageCard singlePackage={singlePackage} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <div style={{ textAlign: `center` }}>
                    <Link to="/packages" style={{ textDecoration: `none` }}>
                        <Button
                            variant="contained"
                            style={{
                                padding: mobile ? `12px 6px` : '14px 12px',
                                fontWeight: `700`,
                                fontFamily: `abril`,
                            }}
                        >
                            See Another Packages
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Packages;
