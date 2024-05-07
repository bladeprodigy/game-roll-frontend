import React from 'react';
import TextField from '@mui/material/TextField';

interface PasswordFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    value={value}
    onChange={onChange}
    sx={{ backgroundColor: 'white' }}
  />
);

export default PasswordField;