// SignInButton.tsx
import Button from '@mui/material/Button';

const RegisterButton = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      style={{ fontWeight: 'bold' }}
    >
      Register
    </Button>
  );
};

export default RegisterButton;