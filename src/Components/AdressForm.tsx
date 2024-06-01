import React from 'react';
import TextField from '@mui/material/TextField';

interface AdressFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdressForm: React.FC<AdressFormProps> = ({ value, onChange }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="address"
    label="Address"
    name="address"
    autoComplete="address"
    autoFocus
    value={value}
    onChange={onChange}
    sx={{ backgroundColor: 'white' }}
    InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
  />
);

export default AdressForm;