import TextField from '@mui/material/TextField';

const Emailform = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    sx={{ backgroundColor: 'white' }}
  />
);

export default Emailform;