import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Classes from '../../styles/Dashboard.module.css';
import { adminListItems, commonListItems, userListItems } from './ListItems';

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

    const { user } = useAuth();
    const admin = true;

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
                <List component="nav">
                    {admin ? adminListItems : userListItems}
                    <Divider sx={{ my: 1 }} />
                    {commonListItems}
                </List>
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
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <Typography>Some Demo Content</Typography>
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <Typography>Some Demo Content</Typography>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Typography>Some Demo Content</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
