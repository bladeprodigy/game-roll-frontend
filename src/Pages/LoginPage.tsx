import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AvatarComponent from '../Components/AvatarComponent';
import WelcomeText from '../Components/WelcomeText';
import LuckyGames from '../Components/LuckyGames';
import LoginText from '../Components/Logintext';
import Emailform from '../Components/Emailform';
import PasswordField from '../Components/Passwordform';
import SignInButton from '../Components/Signinbutton';
import CopyrightComponent from '../Components/CopyrightComponent';

export function LoginPage() {
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth={false}  disableGutters>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AvatarComponent />
        <WelcomeText />
        <LuckyGames />
        <LoginText />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
          <Emailform />
          <PasswordField />
          <FormControlLabel
            control={<Checkbox value="remember" style={{ color: 'white' }} />}
            label="Remember me"
            style={{ color: 'white' }}
          />
          <SignInButton />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyrightComponent />
    </Container>
  );
}

export default LoginPage;