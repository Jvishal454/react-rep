import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'

import CartSvg from '../../assets/SVG/cart.svg'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{bgcolor: "#ffffff", color: "black"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ display: 'flex', flexGrow: 1 }}>
               <p className='header-title'> DzuoKart</p> 
               <img className='svg-cart' src={CartSvg} alt="" />
              </Typography>
              <Button variant="outlined" color="inherit">Login</Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ marginLeft: '1em', }}
              >
                <AccountCircleIcon style={{ fontSize: '26px',}} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header