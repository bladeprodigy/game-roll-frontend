import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Price: React.FC = () => {
  return (
    <Box 
      style={{ 
        position: 'absolute', 
        right: '450px',
        top: '280px',
        color: '#ffffff',
        display: 'flex',
      }}
    >
      <Typography 
        variant="h2" 
        style={{ 
          textDecoration: 'line-through', 
          color: 'red',
          marginRight: '9px', 
          textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black', 
        }}
      >
        100zł
      </Typography>
      <Typography 
        variant="h1" 
        style={{ 
          color: 'green',
          fontWeight: 'bold',
          textShadow: '-1px 0 black, 0 9px black, 1px 0 black, 0 -1px black', 
        }}
      >
        75zł
      </Typography>
    </Box>
  );
};

export default Price;