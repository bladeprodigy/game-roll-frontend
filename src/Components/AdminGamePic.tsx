import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const SmallStyledCard = styled(Card)(() => ({
  width: '10rem',
  height: '16rem',
  backgroundImage: 'url(/gwiazdki.png)',
  transition: 'transform 0.1s',
  transformStyle: 'preserve-3d',
  borderRadius: '10px',
  boxShadow: '1px 1px 30px 40px rgba(0, 0, 0, 0.5)',
  margin: '0.5rem'
}));

interface SmallGamePicProps {
    image: string;
}

const SmallGamePic: React.FC<SmallGamePicProps> = ({ image }) => (
  <SmallStyledCard>
    <CardMedia component="img" height="100%" image={image} alt="Game" />
  </SmallStyledCard>
);

export default SmallGamePic;