import React from 'react';
import Typography from '@mui/material/Typography';

const Discount: React.FC = () => {
  return (
    <Typography 
      variant="h3" 
      style={{ 
        position: 'absolute', 
        right: '250px',
        top: '340px',
        color: '#ffffff' 
      }}
    >
      -25%
    </Typography>
  );
};

export default Discount;