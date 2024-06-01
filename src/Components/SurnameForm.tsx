import React from 'react';
import TextField from '@mui/material/TextField';

interface SurnameFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SurnameForm: React.FC<SurnameFormProps> = ({ value, onChange }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="surname"
    label="Surname"
    name="surname"
    autoComplete="surname"
    autoFocus
    value={value}
    onChange={onChange}
    sx={{ backgroundColor: 'white' }}
    InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
  />
);

export default SurnameForm;