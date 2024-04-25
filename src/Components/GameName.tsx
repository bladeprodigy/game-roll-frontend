import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import GameDesc from './GameDesc'; 
import BuyButton from './BuyButton';
import { keyframes } from '@mui/system';

const GameName = () => {
  const [showMore, setShowMore] = useState(false);

  const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #807a14, 0 0 10px #807a14, 0 0 15px #807a14, 0 0 20px #807a14;
  }
  50% {
    box-shadow: 0 0 10px #807a14, 0 0 20px #807a14, 0 0 30px #807a14, 0 0 40px #807a14;
  }
`;

  return (
    <Box>
      <Typography 
        component="h1" 
        variant="h1" 
        style={{ 
            color: '#ffffff', 
            fontFamily: 'BlinkMacSystemFont', 
            textAlign: 'center', 
            fontWeight: 'bold',
            fontSize: '100px', 
            textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
            position: 'absolute', 
            top: '180px', 
            left: '680px', 
        }}
      >
        Tomb Rider
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '300px',
          left: '725px',
          width: '400px',
          maxHeight: showMore ? '560px' : '400px', 
          overflowY: showMore ? 'scroll' : 'hidden', 
          overflowX: 'hidden', 
          color: '#ffffff', 
          backgroundColor: 'rgba(54, 54, 54, 0.5)', 
          backdropFilter: 'blur(20px)', 
          padding: '10px', 
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ad1090',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#880073',
          },
        }}
      >
        <Typography variant="body1">
          {GameDesc}
        </Typography>
      </Box>
      <Button 
        style={{
            position: 'absolute',
            top: showMore ? '860px' : '700px', 
            left: '870px',
            color: '#e6dc2e',
            fontWeight: 'bold',
        }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Pokaż mniej' : 'Pokaż więcej'}
      </Button>
      <BuyButton 
        onClick={() => {}}
        style={{
            position: 'absolute',
            top: '42%', 
            right: '340px', 
            width: '300px', 
            height: '200px', 
            fontSize: '70px',
            letterSpacing: '-2px',
            lineHeight: '1.2', // Add this line
            animation: `${glow} 20s infinite`, 
        }}
      />
    </Box>
  );
};

export default GameName;