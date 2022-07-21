import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import twogirls from '../assests/images/motivation.png';
import useAuth from '../hooks/useAuth';

function Motivation() {
    const { mobile } = useAuth();
    return (
        <div
            style={{
                minHeight: `90vh`,
                background: `#fff`,
                padding: mobile ? `80px 2px` : `180px 10px`,
            }}
        >
            <Container>
                <Box
                    style={{
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                        flexDirection: mobile ? `column` : `row`,
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} lg={8}>
                            <img
                                src={twogirls}
                                alt="two girls"
                                style={{
                                    maxWidth: `100%`,
                                    height: `auto`,
                                    padding: `0px`,
                                    margin: `0px`,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={4}
                            style={{ padding: `15px 0px`, textAlign: mobile ? `center` : `left` }}
                        >
                            <Typography
                                variant={`${mobile ? `h4` : `h1`}`}
                                fontFamily="abril"
                                fontWeight="300"
                                style={{
                                    color: `#283a5e`,
                                    fontSize: mobile ? `auto` : `80px`,
                                    marginBottom: `20px`,
                                }}
                            >
                                Lets Go Travel with Us
                            </Typography>
                            <Typography variant="p" style={{ color: `#7a9dc0` }}>
                                Tourism is travel for pleasure or business; also the theory and
                                practice of touring, the business of attracting, accommodating, and
                                entertaining tourists, and the business of operating tours.Tourism
                                is travel for pleasure or business; also the theory and practice of
                                touring.
                            </Typography>
                            <Box style={{ marginTop: `20px` }}>
                                <Link to="/packages" style={{ textDecoration: `none` }}>
                                    <Button
                                        variant="contained"
                                        style={{
                                            padding: mobile ? `12px 6px` : '14px 12px',
                                            fontWeight: `700`,
                                            fontFamily: `abril`,
                                        }}
                                    >
                                        See Our Packages
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default Motivation;
