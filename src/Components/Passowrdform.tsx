// PasswordField.tsx
import TextField from '@mui/material/TextField';

const PasswordField = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    sx={{ backgroundColor: 'white' }}
  />
);

export default PasswordField;