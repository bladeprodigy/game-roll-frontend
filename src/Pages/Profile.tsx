import React from 'react';
import { Box, Container } from '@mui/material';
import Slide from '../Components/Slide'; 
import ProfileChanges from '../Components/ProfileChanges';

const Profile: React.FC = () => {
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
        <ProfileChanges />
      </Box>
    </Container>
  );
};

export default Profile;