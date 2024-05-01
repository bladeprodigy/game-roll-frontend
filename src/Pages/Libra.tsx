import React from 'react';
import { Box, Container } from '@mui/material';
import Slide from '../Components/Slide'; 
import FewGameCards from '../Components/FewGameCards';

const Libra: React.FC = () => {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Slide /> {}
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <FewGameCards />
      </Box>
    </Container>
  );
};

export default Libra;