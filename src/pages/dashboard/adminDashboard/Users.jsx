/* eslint-disable react/no-array-index-key */
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../../../components/ScrollToTop';
import useAuth from '../../../hooks/useAuth';
import UsersTable from './UsersTable';

function Users() {
    const { mobile, user, setUser, signOut, auth } = useAuth();
    const [allUsers, setAllUsers] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            const options = {
                url: `https://rocky-inlet-29740.herokuapp.com/users`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            };

            axios(options).then((response) => {
                setAllUsers(response.data);
            });
        } else {
            Swal.fire('Your Token is invalid, Login Again');
            const logOut = () => {
                signOut(auth).then(() => {
                    setUser(null);
                    navigate('/login');
                });
                localStorage.removeItem('accessToken');
            };
            logOut();
        }
    }, [user?.email, auth, navigate, signOut, setUser]);

    if (!Array.isArray(allUsers)) {
        return (
            <Container>
                <Box
                    style={{
                        height: `100vh`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        margin: mobile ? `100px 0px` : `180px 15px`,
                    }}
                >
                    {mobile ? (
                        <>
                            <ScrollToTop />
                            <Grid container spacing={3}>
                                {Array.from(Array(3)).map((packages, index) => (
                                    <Grid item xs={12} key={index}>
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
        );
    }

    if (Array.isArray(allUsers) && allUsers?.length === 0) {
        return (
            <Container>
                <Box
                    style={{
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        margin: mobile ? `100px 0px` : `180px 15px`,
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ color: '#1a213d' }}
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        No Order Found
                    </Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Container>
            <ScrollToTop />
            <Box
                style={{
                    padding: mobile ? `0px` : `0px 150px`,
                }}
            >
                <UsersTable />
            </Box>
        </Container>
    );
}

export default Users;
