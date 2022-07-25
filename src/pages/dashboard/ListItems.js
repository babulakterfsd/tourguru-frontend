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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export const adminListItems = (
    <>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Summary" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleAltIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Users List" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CollectionsBookmarkIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="All Packages" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BorderColorIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Add New Package" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MonetizationOnIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="All Orders" />
        </ListItemButton>
    </>
);
export const userListItems = (
    <>
        <ListItemButton>
            <ListItemIcon>
                <AddShoppingCartIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="My Orders" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <StarBorderIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Review TourGuru" />
        </ListItemButton>
    </>
);

export const commonListItems = (
    <>
        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader> */}
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Back to Home" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon style={{ color: `#f3680b` }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </>
);
