import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Styles from '../styles/Footer.module.css';

function Footer() {
    const { mobile } = useAuth();
    return (
        <div className={`${Styles.footer}`}>
            <Box sx={{ flexGrow: 1 }} style={{ color: '#fff' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={`${Styles.boxStyler}`}>
                            <Box>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        sx={{
                                            fontFamily: 'abril-fatface',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            marginBottom: '32px',
                                        }}
                                    >
                                        TourGuru
                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                    blanditiis consequuntur exercitationem excepturi. Voluptatem
                                    dolorum ut saepe. Ducimus, provident. Optio consequuntur
                                    reiciendis blanditiis ratione voluptatem.
                                </Typography>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    marginTop: '32px',
                                }}
                            >
                                <a
                                    href="https://facebook.com"
                                    style={{ color: '#fff', marginRight: '7px' }}
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    style={{ color: '#fff', marginRight: '7px' }}
                                >
                                    <TwitterIcon />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    style={{ color: '#fff', marginRight: '7px' }}
                                >
                                    <LinkedInIcon />
                                </a>
                                <a href="https://github.com" style={{ color: '#fff' }}>
                                    <GitHubIcon />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={`${Styles.boxStyler}`}>
                            <Typography style={{ marginBottom: '32px', fontWeight: '700' }}>
                                Contact Us
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio est
                                asperiores corrupti expedita aut amet reiciendis nostrum,
                                voluptatibus itaque ullam iusto sit vitae nobis ad necessitatibus
                                beatae nisi totam aperiam.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={`${Styles.boxStyler}`}>
                            <Typography style={{ marginBottom: '32px', fontWeight: '700' }}>
                                Subscribe Newsletter
                            </Typography>
                            <Typography style={{ textAlign: mobile ? `center` : `left` }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
                                qui ducimus illo facere ut architecto. Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Enim, minima eos itaque non expedita
                            </Typography>
                            <input
                                type="email"
                                name="email"
                                placeholder="your email.."
                                id="email"
                                style={{
                                    background: 'inherit',
                                    border: '1px solid #fff',
                                    borderRadius: '25px',
                                    padding: '12px',
                                    marginTop: '15px',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '48px',
                    borderTop: '1px dotted #fff',
                }}
            >
                <Box style={{ marginTop: '12px', textAlign: mobile ? `center` : `left` }}>
                    <Typography>Developed by Babul Akter | copyright 2023 &copy;</Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Footer;
