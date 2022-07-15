/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Styles from '../styles/Banner.module.css';

function Banner() {
    const mobile = useMediaQuery('(max-width:475px)');
    const tablet = useMediaQuery('(max-width:992px)');
    const desktop = useMediaQuery('(min-width:1199px)');

    return (
        <div>
            <div className={`${Styles.banner}`}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        className={`${Styles.mainBanner}`}
                        sx={{
                            display: mobile ? `flex` : `block`,
                            justifyContent: `center`,
                            flexDirection: 'column',
                        }}
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                            perferendis et, debitis quod asperiores officia, atque nam quo nostrum
                            assumenda dolorum! Reiciendis repellendus enim est. Lorem ipsum, dolor
                            sit amet consectetur adipisicing elit. Inventore distinctio ipsum,
                            itaque nobis totam exercitationem?
                        </Typography>
                        <br />
                        <Button
                            variant="contained"
                            style={{
                                padding: mobile ? `12px 6px` : '14px 12px',
                                marginTop: '25px',
                                fontWeight: '600',
                            }}
                        >
                            See Our Packages
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Banner;
