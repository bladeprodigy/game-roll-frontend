// SignInButton.tsx
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Zmień na useNavigate

const SignInButton = () => {
  const navigate = useNavigate(); // Zmień na useNavigate

  const handleClick = () => {
    navigate('/roll'); // Zmień na navigate
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      style={{ fontWeight: 'bold' }}
      onClick={handleClick} // Dodaj obsługę zdarzenia onClick
    >
      Sign In
    </Button>
  );
};

export default SignInButton;