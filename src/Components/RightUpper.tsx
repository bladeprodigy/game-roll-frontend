import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const RightUpper: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate('/');
  };

  return (
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
        onClick={handleLogout}
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
};

export default RightUpper;