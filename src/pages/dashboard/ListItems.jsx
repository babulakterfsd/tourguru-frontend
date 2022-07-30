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
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

    const AdminListItems = (
        <>
            <Link to="summary" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Summary" />
                </ListItemButton>
            </Link>
            <Link to="allusers" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Users List" />
                </ListItemButton>
            </Link>
            <Link to="allpackages" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <CollectionsBookmarkIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="All Packages" />
                </ListItemButton>
            </Link>
            <Link to="addnewpackage" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <BorderColorIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Add New Package" />
                </ListItemButton>
            </Link>
            <Link to="allorders" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <MonetizationOnIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="All Orders" />
                </ListItemButton>
            </Link>
        </>
    );

    const UserListItems = (
        <>
            <Link to="myorders" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <AddShoppingCartIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                </ListItemButton>
            </Link>
            <Link to="addreview" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <StarBorderIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Review TourGuru" />
                </ListItemButton>
            </Link>
        </>
    );

    const CommonListItems = (
        <>
            {/* <ListSubheader component="div" inset>
                Saved reports
            </ListSubheader> */}
            <Link to="profile" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </Link>
            <Link to="/" style={{ textDecoration: `none`, color: `rgba(0,0,0, .87)` }}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon style={{ color: `#f3680b` }} />
                    </ListItemIcon>
                    <ListItemText primary="Back to Home" />
                </ListItemButton>
            </Link>
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
