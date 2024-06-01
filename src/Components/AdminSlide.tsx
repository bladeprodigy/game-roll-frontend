import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';

const AdminSlide: React.FC = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  };

  return (
    <Drawer 
      variant='permanent' 
      anchor="left" 
      PaperProps={{ 
        style: { 
          width: isSmallScreen ? '160px' : '250px',
          backgroundImage: 'linear-gradient(rgba(2, 1, 1, 2.5), rgba(1, 1, 0, 0.5)), url(/back.png)', 
          backgroundSize: 'cover',
          backdropFilter: 'blur(5px)'
        } 
      }}
    >
      <List>
        <ListItem button onClick={() => handleNavigation('/add-photo')} sx={{ mb: 5, pt: 5 }}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Add photo</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/edit-game')} sx={{ pt: 0 }}>
          <ListItemIcon>
            <LibraryBooksIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Edit Game</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/delete-game')} sx={{ mb: 1, pt: 5 }}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Delete Game</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/games')} sx={{ mb: 1, pt: 5 }}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Get all Games</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/add-game')} sx={{ mb: 5, pt: 5 }}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Add Game</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleLogout()} sx={{ pt: 10 }}>
          <ListItemIcon>
            <ArrowBackIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '1.5rem', color: '#ad1090' }}>Log Out</Typography>} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSlide;