/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Divider, List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function MyListItems() {
    const { isAdmin, signOut, setUser, setIsLoading, auth } = useAuth();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // logsout the user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            navigate('/');
        });
        setIsLoading(false);
    };

    const activeStyle = {
        textDecoration: 'none',
        color: '#f3680b',
        display: 'block',
        backgroundColor: '#1a213d',
        fontWeight: '700',
        transition: '1s',
    };
    const inActiveStyle = {
        textDecoration: 'none',
        color: 'rgba(0,0,0, .87)',
    };

    const AdminListItems = (
        <>
            <NavLink
                to="summary"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Summary" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="allusers"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Users List" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="allpackages"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <CollectionsBookmarkIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="All Packages" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="addnewpackage"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <BorderColorIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Add New Package" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="allorders"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <MonetizationOnIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="All Orders" />
                </ListItemButton>
            </NavLink>
        </>
    );

    const UserListItems = (
        <>
            <NavLink
                to="myorders"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AddShoppingCartIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="addreview"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <StarBorderIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Review TourGuru" />
                </ListItemButton>
            </NavLink>
        </>
    );

    const CommonListItems = (
        <>
            {/* <ListSubheader component="div" inset>
                Saved reports
            </ListSubheader> */}
            <NavLink
                to="profile"
                style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Back to Home" />
                </ListItemButton>
            </NavLink>
            <ListItemButton onClick={logOut}>
                <ListItemIcon>
                    <LogoutIcon style={{ color: `#f3680b` }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </>
    );

    return (
        <List component="nav">
            {isAdmin ? AdminListItems : UserListItems}
            <Divider sx={{ my: 1 }} />
            {CommonListItems}
        </List>
    );
}

export default MyListItems;
