import React, { useState } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './Passwordform';
import Box from '@mui/material/Box';

const ProfileChanges: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2} 
         style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <EmailForm value={email} onChange={handleEmailChange} />
      <PasswordForm value={password} onChange={handlePasswordChange} />
    </Box>
  );
};

export default ProfileChanges;