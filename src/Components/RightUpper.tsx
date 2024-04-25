import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RightUpper: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      position: 'absolute',
      top: 5,
      right: 10,
      padding: '1rem',
    }}
  >
    <Button 
      variant="contained" 
      onClick={() => { window.location.href = '/profile'; }}
      sx={{
        fontSize: '1rem',
        padding: '5px 20px',
        marginRight: '5px', 
      }}
    >
      <Typography 
        component="h1" 
        variant="h6"
        sx={{ 
          color: '#ffffff', 
          fontFamily: 'Arial', 
          textAlign: 'center', 
        }}
      >
        PROFILE
      </Typography>
    </Button>
    <Button 
      variant="contained" 
      onClick={() => { /* add logout functionality here */ }}
      sx={{
        fontSize: '1rem',
        padding: '5px 10px',
      }}
    >
      <Typography 
        component="h1" 
        variant="h6"
        sx={{ 
          color: '#ffffff', 
          fontFamily: 'Arial', 
          textAlign: 'center', 
        }}
      >
        LOG OUT
      </Typography>
    </Button>
  </Box>
);

export default RightUpper;