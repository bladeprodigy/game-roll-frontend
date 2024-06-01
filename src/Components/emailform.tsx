import React from 'react';
import TextField from '@mui/material/TextField';

interface EmailFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ value, onChange }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    value={value}
    onChange={onChange}
    sx={{ backgroundColor: 'white' }}
    InputLabelProps={{ style: { color: '#b00f93', marginTop: '10px'  }, shrink: true }}
  />
);

export default EmailForm;