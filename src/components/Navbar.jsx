// import MenuIcon from '@mui/icons-material/Menu';
// import AppBar from '@mui/material/AppBar';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Toolbar from '@mui/material/Toolbar';
// import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const pages = ['About', 'Products', 'Blog', 'contact'];
// const settings = ['Profile', 'Dashboard', 'Logout'];

// function Navbar() {
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position="static" color="bluishDark">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     {/* desktop logo */}
//                     <Link to="/" style={{ textDecoration: 'none' }}>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 fontFamily: 'abril-fatface',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: '#fff',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             TourGuru
//                         </Typography>
//                     </Link>

//                     {/* mobile */}
//                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="white"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center" color="inherit">
//                                         {page}
//                                     </Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>

//                     {/* mobile logo */}
//                     <Link to="/" style={{ textDecoration: 'none' }}>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             sx={{
//                                 display: { xs: 'flex', md: 'none' },
//                                 fontFamily: 'abril-fatface',
//                                 fontWeight: 700,
//                                 letterSpacing: '.2rem',
//                                 color: '#fff',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             TourGuru
//                         </Typography>
//                     </Link>

//                     {/* desktop */}
//                     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 3, color: '#fff', display: 'block' }}
//                                 disableRipple
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>

//                     {/* common */}
//                     <Box sx={{ flexGrow: 0 }} style={{ marginLeft: 'auto' }}>
//                         <Tooltip title="settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default Navbar;

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="bluishDark">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* desktop logo */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'abril-fatface',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            TourGuru
                        </Typography>
                    </Link>

                    {/* mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="white"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* mobile menubar */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                mt: 1.5,
                            }}
                        >
                            <MenuItem
                                onClick={handleCloseNavMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/about" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        About
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/products" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Products
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/blog" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Blog
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/contact" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Contact
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} disableRipple>
                                <SearchIcon color="#000" /> Search...
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* mobile logo */}
                    <Box style={{ marginLeft: 'auto' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    fontFamily: 'abril-fatface',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            >
                                TourGuru
                            </Typography>
                        </Link>
                    </Box>

                    {/* desktop */}
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                        style={{ margin: '0px auto' }}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Typography textAlign="center" color="#fff">
                                    About
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <Typography textAlign="center" color="#fff">
                                    Products
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="/blog" style={{ textDecoration: 'none' }}>
                                <Typography textAlign="center" color="#fff">
                                    Blog
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Typography textAlign="center" color="#fff">
                                    Contact
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} disableRipple>
                            <SearchIcon color="white" />
                        </MenuItem>
                    </Box>

                    {/* common */}
                    <Box sx={{ flexGrow: 0 }} style={{ marginLeft: 'auto' }}>
                        <Tooltip title="settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem
                                onClick={handleCloseUserMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Profile
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseUserMenu}
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Dashboard
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center" color="#000">
                                        Logout
                                    </Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
