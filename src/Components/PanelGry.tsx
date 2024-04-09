import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from '../assets/ikonka.png';
import Box from '@mui/material/Box';


const FlipCard = styled(Card)(({ theme }) => ({
  width: '320px',
  height: '600px',
  margin: '160px',
  backgroundImage: 'url(/gwiazdki.png)',
  transition: 'transform 0.1s',
  transformStyle: 'preserve-3d',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: '1px 1px 30px 40px rgba(0, 0, 0, 0.5)',
  '&.flipped': {
    transform: 'rotateY(180deg)',
  },
}));

const StyledTypography = styled(Typography)(({
  fontFamily: 'BlinkMacSystemFont',
  position: 'absolute',
  top: '47%',
  left: '51%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  fontSize: '60px',
  textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
}));

const StyledButton = styled(Button)(({
  position: 'absolute',
  bottom: '10px',
  left: '25%',
  transform: 'translateX(-50%)',
  width: '150px',
  height: '60px',
  fontSize: '22px',
  color: '#ad1090',
  backgroundColor: '#e6dc2e',
  boxShadow: '1px 1px 15px 5px rgba(0, 0, 0, 0.5)',
  borderRadius: '25px', // add this line to round the corners
  fontFamily: 'BlinkMacSystemFont',        
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', // add text shadow
  '&.flipped': {
    transform: 'translateX(-50%) rotateY(180deg)',
  },
  '&:hover': {
    backgroundColor: '#e6dc2e', // change this to the color you want on hover
  },
}));

const CardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const PanelGry: React.FC = () => {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <CardsContainer>
      <FlipCard onClick={() => setFlipped1(!flipped1)} className={flipped1 ? 'flipped' : ''}>
        <CardContent>
          {flipped1 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia component="img" height="500" image={Image} alt="Game image" />
            </Box>
          ) : (
            <>
              <StyledTypography variant="h1">
                Lucky
              </StyledTypography>
              <StyledTypography variant="h1" style={{ marginTop: '60px' }}>
                Game
              </StyledTypography>
            </>
          )}
        </CardContent>
        {flipped1 && <StyledButton variant="contained" onClick={handleButtonClick} className={flipped1 ? 'flipped' : ''}>Buy now!</StyledButton>}
      </FlipCard>
      <FlipCard onClick={() => setFlipped2(!flipped2)} className={flipped2 ? 'flipped' : ''}>
        <CardContent>
          {flipped2 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia component="img" height="500" image={Image} alt="Game image" />
            </Box>
          ) : (
            <>
              <StyledTypography variant="h1">
                Lucky
              </StyledTypography>
              <StyledTypography variant="h1" style={{ marginTop: '60px' }}>
                Game
              </StyledTypography>
            </>
          )}
        </CardContent>
        {flipped2 && <StyledButton variant="contained" onClick={handleButtonClick} className={flipped2 ? 'flipped' : ''}>Buy now!</StyledButton>}
      </FlipCard>
      <FlipCard onClick={() => setFlipped3(!flipped3)} className={flipped3 ? 'flipped' : ''}>
        <CardContent>
          {flipped3 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia component="img" height="500" image={Image} alt="Game image" />
            </Box>
          ) : (
            <>
              <StyledTypography variant="h1">
                Lucky
              </StyledTypography>
              <StyledTypography variant="h1" style={{ marginTop: '60px' }}>
                Game
              </StyledTypography>
            </>
          )}
        </CardContent>
        {flipped3 && <StyledButton variant="contained" onClick={handleButtonClick} className={flipped3 ? 'flipped' : ''}>Buy now!</StyledButton>}
      </FlipCard>
    </CardsContainer>
  );
};

export default PanelGry;