import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Image from '../assets/ikonka.png';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '400px',
    height: '730px',
    margin: '160px',
    backgroundImage: 'url(/gwiazdki.png)',
    transition: 'transform 0.1s',
    transformStyle: 'preserve-3d',
    position: 'absolute',
    left: '1%',
    borderRadius: '10px',
    boxShadow: '1px 1px 30px 40px rgba(0, 0, 0, 0.5)',
}));

const GamePic: React.FC = () => (
  <StyledCard>
    <CardMedia component="img"  height="650" image={Image} alt="Icon" />
  </StyledCard>
);

export default GamePic;