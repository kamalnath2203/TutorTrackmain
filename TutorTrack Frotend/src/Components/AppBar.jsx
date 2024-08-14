import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../assets/Logo.png';
import { alpha, styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme, bgColor, textColor }) => ({
    color: textColor || 'white',
    marginRight: theme.spacing(1),
    '&:hover': {
        backgroundColor: alpha(bgColor || theme.palette.common.white, 0.2),
    },
}));

const CustomAppBar = ({ bgColor = '#33b864', textColor = '#fff', logoHeight = 40 }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleStartLearningClick = () => {
        navigate('/login');
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/');
        handleClose();
    };

    const handleYourCourses = () => {
        navigate('/your-courses');
        handleClose();
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: bgColor, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar>
                <Box display="flex" alignItems="center" sx={{ marginRight: 'auto' }}>
                    <img src={Logo} alt="Logo" style={{ height: logoHeight, marginRight: 16 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            color: textColor,
                            textDecoration: 'none',
                            fontFamily: "Verdana, sans-serif",
                            fontWeight: 'bold',
                            '&:hover': {
                                color: alpha(textColor, 0.75),
                            },
                        }}
                    >
                        𝚃𝚞𝚝𝚘𝚛𝚃𝚛𝚊𝚌𝚔
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <CustomButton component={Link} to="/top-cities" bgColor={bgColor} textColor={textColor}>Top Cities</CustomButton>
                <CustomButton component={Link} to="/about-us" bgColor={bgColor} textColor={textColor}>About Us</CustomButton>
                <CustomButton component={Link} to="/become-tutor" bgColor={bgColor} textColor={textColor}>Become a Tutor</CustomButton>
                <CustomButton onClick={handleStartLearningClick} bgColor={bgColor} textColor={textColor}>Start Learning</CustomButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    sx={{ color: textColor }}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleYourCourses}>Your Courses</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
