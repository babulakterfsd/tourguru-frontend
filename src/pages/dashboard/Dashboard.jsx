/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Classes from '../../styles/Dashboard.module.css';
import AddNewpackage from './adminDashboard/AddNewpackage';
import AllOrders from './adminDashboard/AllOrders';
import AllPackages from './adminDashboard/AllPackages';
import Summary from './adminDashboard/Summary';
import Users from './adminDashboard/Users';
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

    const { user, isAdmin } = useAuth();
    const { pathname } = useLocation();

    return (
        <Box sx={{ display: 'flex' }} className={Classes.mainDashboardStyle}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
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
                                {user?.displayname?.length >= 20
                                    ? `${user?.displayName?.slice(0, 20)}...`
                                    : user?.displayName}
                            </Typography>
                            <Typography variant="p">
                                {user?.email?.length >= 20
                                    ? `${user?.email?.slice(0, 20)}...`
                                    : user?.email}
                            </Typography>

                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon
                                    style={{
                                        color: `#f3680b`,
                                        outline: `1px dotted #ccc`,
                                        border: `1px solid transparent`,
                                        borderRadius: `100px`,
                                        outlineOffset: `3px`,
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
                                        outline: `1px dotted #ccc`,
                                        border: `1px solid transparent`,
                                        borderRadius: `100px`,
                                        outlineOffset: `3px`,
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
                ) : null || (pathname === `/dashboard` && !isAdmin) ? (
                    <MyOrders />
                ) : null || (pathname === `/dashboard/summary` && isAdmin) ? (
                    <Summary />
                ) : null || (pathname === `/dashboard/allusers` && isAdmin) ? (
                    <Users />
                ) : null || (pathname === `/dashboard/allpackages` && isAdmin) ? (
                    <AllPackages />
                ) : null || (pathname === `/dashboard/addnewpackage` && isAdmin) ? (
                    <AddNewpackage />
                ) : null || (pathname === `/dashboard/allorders` && isAdmin) ? (
                    <AllOrders />
                ) : null || (pathname === `/dashboard/myorders` && !isAdmin) ? (
                    <MyOrders />
                ) : null || (pathname === `/dashboard/addreview` && !isAdmin) ? (
                    <AddReview />
                ) : null || pathname === `/dashboard/profile` ? (
                    <Profile />
                ) : null}
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
