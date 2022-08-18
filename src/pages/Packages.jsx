/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Button, Container, Skeleton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SinglePackageCard from '../components/SinglePackageCard';
import useAuth from '../hooks/useAuth';

function Packages() {
    const [allPackages, setAllPackage] = useState([]);
    const [numberOfPackage, setNumberOfPackage] = useState(6);
    const { mobile } = useAuth();

    const loadMore = () => {
        setNumberOfPackage((prev) => prev + 3);
    };

    useEffect(() => {
        document.title = 'Tourguru | Packages';
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/packages`).then((result) => setAllPackage(result?.data));
    }, []);

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
                <Typography
                    color="primary"
                    style={{ textAlign: `center` }}
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
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
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    Our All Packages
                </Typography>
                <Typography
                    style={{ textAlign: `center`, fontFamily: `poppins` }}
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                    quaerat! Culpa, inventore. Doloribus praesentium dicta repellendus tempora
                    eligendi maxime odio soluta quae in, architecto modi maiores quas facere?
                </Typography>
                {allPackages?.length === 0 ? (
                    <Container>
                        <Box
                            style={{
                                height: `100vh`,
                                display: `flex`,
                                justifyContent: `center`,
                                alignItems: `center`,
                                margin: mobile ? `100px 0px` : `180px 15px`,
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
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
                ) : (
                    <Box style={{ padding: mobile ? `40px 0px` : `80px 0px` }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3, lg: 5 }}
                            columns={{ xs: 12, md: 12, lg: 12 }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            {allPackages?.slice(0, numberOfPackage)?.map((singlePackage, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <SinglePackageCard singlePackage={singlePackage} />
                                </Grid>
                            ))}
                        </Grid>
                        <Box style={{ textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                style={{
                                    padding: mobile ? `8px 6px` : '8px 16px',
                                    marginTop: '25px',
                                    fontWeight: '600',
                                }}
                                disabled={allPackages?.length <= numberOfPackage}
                                onClick={() => loadMore()}
                            >
                                Load More
                            </Button>
                        </Box>
                    </Box>
                )}
            </Container>
        </div>
    );
}

export default Packages;
