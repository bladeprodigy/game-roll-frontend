// SignInButton.tsx
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

const SignInButton = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/roll'); 
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      style={{ fontWeight: 'bold' }}
      onClick={handleClick} 
    >
      Sign In
    </Button>
  );
};

export default SignInButton;