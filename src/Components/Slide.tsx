import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Slide: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer 
      variant="permanent" 
      anchor="left" 
      PaperProps={{ 
        style: { 
          width: '250px',
          backgroundImage: 'linear-gradient(rgba(2, 1, 1, 2.5), rgba(1, 1, 0, 0.5)), url(/back.png)', 
          backgroundSize: 'cover',
          backdropFilter: 'blur(5px)'
        } 
      }}
    >
      <List>
        <ListItem button onClick={() => handleNavigation('/profile')} sx={{ mb: 5, pt: 20 }}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '2rem', color: '#ad1090' }}>Profile</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/libra')} sx={{ pt: 0 }}>
          <ListItemIcon>
            <LibraryBooksIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '2rem', color: '#ad1090' }}>Library</Typography>} />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/rolled')} sx={{ pt: 65 }}>
          <ListItemIcon>
            <ArrowBackIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary=
          {<Typography sx={{ fontSize: '2rem', color: '#ad1090' }}>Back</Typography>} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Slide;