// ProfileChanges.tsx
import React from 'react';
import EmailForm from './Emailform';
import PasswordForm from './Passwordform';
import Box from '@mui/material/Box';

const ProfileChanges: React.FC = () => (
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2} 
       style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <EmailForm />
    <PasswordForm />
  </Box>
);

export default ProfileChanges;