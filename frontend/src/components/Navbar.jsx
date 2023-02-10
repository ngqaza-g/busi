import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = ( event ) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

  return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Server Room Monitoring
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems : 'center' 
            }}>
              <Typography variant="" >
                  Username
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={ handleClick }
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
  );
}
