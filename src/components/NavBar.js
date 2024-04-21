import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home'; // Import the icon for the home page
import SignInSide from './SignInSide';
import SignUp from './SignUp';

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleSignIn = () => {
    
  }

  const handleSignUp = () => {
    
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }} >
          <HomeIcon sx={{ mr: 1 }}  /> {/* Use the HomeIcon for the logo */}
          <Typography variant="h6" style={{ textDecoration: 'none', color: 'inherit' }} component={Link} to="/">
            My Website
          </Typography>
        </Box>
        {isSmallScreen ? (
          <IconButton
            edge="end" // Aligns the icon to the right
            color="inherit"
            aria-label={openDrawer ? 'close' : 'menu'}
            onClick={handleDrawerToggle}
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />} {/* Toggle between burger icon and close icon */}
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6" component={Link} to="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              About Us
            </Typography>
            <Typography variant="h6" component={Link} to="/contact" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Contact
            </Typography>
            <Typography variant="h6" component={Link} to="/blog" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Blog
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255, 255, 255, 0.5)' }} />
            <Typography variant="h6" component={Link} to="/sign-in" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Sign In
            </Typography>
            <Typography variant="h6" component={Link} to="/sign-up" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Sign Up
            </Typography>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right" // Position the drawer to the right
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={handleDrawerClose}
          sx={{ alignSelf: 'flex-end', m: 1 }} // Align close icon to the right and add some margin
        >
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem  component={Link} to="/about" onClick={handleDrawerClose}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem  component={Link} to="/contact" onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem  component={Link} to="/blog" onClick={handleDrawerClose}>
            <ListItemText primary="Blog" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/sign-in" onClick={handleDrawerClose}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem component={Link} to="/sign-up" onClick={handleDrawerClose}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
