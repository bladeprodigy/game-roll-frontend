import { Box, Container } from '@mui/material';
import AdminSlide from '../Components/AdminSlide';

const AdminPanel = () => {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <AdminSlide /> {}
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        
      </Box>
    </Container>
  );
};

export default AdminPanel;