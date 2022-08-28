/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container, Grid, Skeleton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import useAuth from '../../hooks/useAuth';
import Classes from '../../styles/Dashboard.module.css';
import AddNewpackage from './adminDashboard/AddNewpackage';
import AllOrders from './adminDashboard/AllOrders';
import AllPackages from './adminDashboard/AllPackages';
import SingleUserDetails from './adminDashboard/SingleUserDetails';
import Summary from './adminDashboard/Summary';
import Users from './adminDashboard/Users';
import NotFoundInDashboard from './commonDashboard/NotFoundInDashboard';
import Profile from './commonDashboard/Profile';
import MyListItems from './ListItems';
import AddReview from './userDashboard/AddReview';
import MyOrders from './userDashboard/MyOrders';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    })
);

function DashboardContent() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        document.title = 'Tourguru | Dashboard';
    });

    const { user, isAdmin, mobile, userInfoInDatabase } = useAuth();
    const { pathname } = useLocation();

    if (isAdmin === undefined) {
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
                                <Grid item md={6} lg={4}>
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

    return (
        <Box sx={{ display: 'flex' }} className={Classes.mainDashboardStyle}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: [1],
                    }}
                >
                    {open ? (
                        <div
                            style={{
                                display: `flex`,
                                justifyContent: `center`,
                                alignItems: `center`,
                                flexDirection: `column`,
                                padding: `15px 0px`,
                                minHeight: `130px`,
                            }}
                        >
                            <Typography variant="p">
                                {userInfoInDatabase?.displayname?.length >= 20
                                    ? `${userInfoInDatabase?.displayName?.slice(0, 20)}...`
                                    : userInfoInDatabase?.displayName}
                            </Typography>
                            <Typography variant="p">
                                {userInfoInDatabase?.email?.length >= 20
                                    ? `${userInfoInDatabase?.email?.slice(0, 20)}...`
                                    : userInfoInDatabase?.email}
                            </Typography>

                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon
                                    style={{
                                        color: `#f3680b`,
                                        outline: `1px solid #f3680b`,
                                        border: `1px solid transparent`,
                                        borderRadius: `100px`,
                                        outlineOffset: `3px`,
                                        marginTop: '10px',
                                    }}
                                />
                            </IconButton>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: `flex`,
                                justifyContent: `center`,
                                alignItems: `center`,
                                flexDirection: `column`,
                                padding: `15px 0px`,
                                minHeight: `130px`,
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronRightIcon
                                    style={{
                                        color: `#f3680b`,
                                        outline: `1px solid #f3680b`,
                                        border: `1px solid transparent`,
                                        borderRadius: `100px`,
                                        outlineOffset: `3px`,
                                        marginTop: '10px',
                                    }}
                                />
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
                <Divider />
                <MyListItems />
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                {pathname === `/dashboard` && isAdmin ? (
                    <Summary />
                ) : pathname === `/dashboard` && !isAdmin ? (
                    <MyOrders />
                ) : pathname === `/dashboard/summary` && isAdmin ? (
                    <Summary />
                ) : pathname === `/dashboard/allusers` && isAdmin ? (
                    <Users />
                ) : pathname === `/dashboard/allusers/singleuserdetails` && isAdmin ? (
                    <SingleUserDetails />
                ) : pathname === `/dashboard/allpackages` && isAdmin ? (
                    <AllPackages />
                ) : pathname === `/dashboard/addnewpackage` && isAdmin ? (
                    <AddNewpackage />
                ) : pathname === `/dashboard/allorders` && isAdmin ? (
                    <AllOrders />
                ) : pathname === `/dashboard/myorders` && !isAdmin ? (
                    <MyOrders />
                ) : pathname === `/dashboard/addreview` && !isAdmin ? (
                    <AddReview />
                ) : pathname === `/dashboard/profile` ? (
                    <Profile />
                ) : (
                    <NotFoundInDashboard />
                )}
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
