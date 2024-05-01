import React from 'react';
import { Box } from '@mui/system';
import GamePic from './GamePic';

const FewGameCards: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '10%',
        height: '10%',
      }}
    >
      <Box sx={{ position: 'absolute', left: 150, top: 0, width: '25px', height: '10px' }}>
        <GamePic />
      </Box>
      <Box sx={{ position: 'absolute', left: 600, top: 0, width: '25px', height: '10px' }}>
        <GamePic />
      </Box>
    </Box>
  );
};

export default FewGameCards;