/* eslint-disable no-unused-vars */
import DomainIcon from '@mui/icons-material/Domain';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import useAuth from '../hooks/useAuth';

function About() {
    const { mobile } = useAuth();

    useEffect(() => {
        document.title = 'Tourguru | About Us';
    }, []);

    return (
        <Container style={{ minHeight: '100vh', padding: '20px' }}>
            <ScrollToTop />
            <Typography
                variant="h3"
                style={{ textAlign: 'center' }}
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                <span style={{ color: '#f3680b', fontFamily: `abril` }}>WHY CHOOSE</span> TOURGURU
            </Typography>
            <Box
                style={{ textAlign: 'center', margin: '20px 0px' }}
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                <img
                    src="https://i.ibb.co/HtffG6b/aboutusbanner.png"
                    alt="aboutimg"
                    style={{
                        height: '250px',
                        width: mobile ? '100%' : '750px',
                        objectFit: mobile ? 'cover' : 'none',
                    }}
                />
            </Box>
            <Box
                style={{
                    margin: '60px 0px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: mobile ? 'column' : 'row',
                }}
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                <Box style={{ textAlign: 'center', marginBottom: mobile ? '20px' : '0px' }}>
                    <DriveEtaIcon style={{ color: '#f3680b', fontSize: '32px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bolder' }}>
                        Private Transport
                    </Typography>
                    <div
                        style={{
                            width: '75px',
                            height: '3px',
                            backgroundColor: '#f3680b',
                            margin: '0px auto',
                        }}
                    />
                    <Typography>
                        I have always made a living to make movies, never the other way around.I
                        first I washed dishes in a seafoodI have always made a living to make
                    </Typography>
                </Box>
                <Box
                    style={{
                        textAlign: 'center',
                        margin: mobile ? '0px' : '0px 25px',
                        marginBottom: mobile ? '35px' : '0px',
                    }}
                >
                    <DomainIcon style={{ color: '#f3680b', fontSize: '32px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bolder' }}>
                        Great Hotels
                    </Typography>
                    <div
                        style={{
                            width: '75px',
                            height: '3px',
                            backgroundColor: '#f3680b',
                            margin: '0px auto',
                        }}
                    />
                    <Typography>
                        I have always made a living to make movies, never the other way around.I
                        first I washed dishes in a seafoodI have always made a living to make
                    </Typography>
                </Box>
                <Box
                    style={{
                        textAlign: 'center',
                        margin: mobile ? '0px' : '0px 25px 0px 0px',
                        marginBottom: mobile ? '35px' : '0px',
                    }}
                >
                    <RestaurantIcon style={{ color: '#f3680b', fontSize: '32px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bolder' }}>
                        Awesome Food
                    </Typography>
                    <div
                        style={{
                            width: '75px',
                            height: '3px',
                            backgroundColor: '#f3680b',
                            margin: '0px auto',
                        }}
                    />
                    <Typography>
                        I have always made a living to make movies, never the other way around.I
                        first I washed dishes in a seafoodI have always made a living to make
                    </Typography>
                </Box>
                <Box style={{ textAlign: 'center' }}>
                    <LocationOnIcon style={{ color: '#f3680b', fontSize: '32px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bolder' }}>
                        Diverse Destinations
                    </Typography>
                    <div
                        style={{
                            width: '75px',
                            height: '3px',
                            backgroundColor: '#f3680b',
                            margin: '0px auto',
                        }}
                    />
                    <Typography>
                        I have always made a living to make movies, never the other way around.I
                        first I washed dishes in a seafoodI have always made a living to make
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default About;
