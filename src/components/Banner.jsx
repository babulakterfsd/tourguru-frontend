/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Styles from '../styles/Banner.module.css';

function Banner() {
    const { mobile, tablet, desktop } = useAuth();
    return (
        <div>
            <div className={`${Styles.banner}`} style={{ alignItems: `center` }}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        className={`${Styles.mainBanner}`}
                        data-aos="fade-down"
                        data-aos-duration="1500"
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 700,
                                marginBottom: '12px',
                                textAlign: mobile ? `center` : `left`,
                            }}
                            className={`${Styles.bannerTitle}`}
                        >
                            Explore The World With TourGuru.
                        </Typography>
                        <Typography
                            variant="p"
                            style={{
                                textAlign: mobile ? `center` : `left`,
                                wordBreak: mobile ? 'break-all' : `keep-all`,
                            }}
                        >
                            When you travel, not the trip or the vacation itself, but the whole
                            process of planning, exploring, and returning from a trip is important.
                            When you realise how the benefits of travelling can do wonders for you,
                            you definitely will have the motivation to pack your bag and start
                            travelling more.
                        </Typography>
                        <br />
                        <div
                            style={{ display: mobile ? `flex` : `block`, justifyContent: `center` }}
                        >
                            <Link to="/packages" style={{ textDecoration: `none` }}>
                                <Button
                                    variant="contained"
                                    style={{
                                        padding: mobile ? `12px 8px` : '14px 12px',
                                        marginTop: '25px',
                                        fontWeight: '600',
                                    }}
                                >
                                    See Our Packages
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Banner;
