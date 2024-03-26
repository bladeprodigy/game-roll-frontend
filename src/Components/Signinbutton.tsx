// SignInButton.tsx
import Button from '@mui/material/Button';

const SignInButton = () => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    style={{ fontWeight: 'bold' }}
  >
    Sign In
  </Button>
);

export default SignInButton;