import './App.css'
import back from "../back.png"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AvatarComponent from './Components/AvatarComponent';
import WelcomeText from './Components/WelcomeText';
import Luckygames from './Components/Luckygames';
import LoginText from './Components/Logintext';
import Emailform from './Components/emailform';
import PasswordField from './Components/Passowrdform';
import SignInButton from './Components/Signinbutton';
import CopyrightComponent from './Components/CopyrightComponent'; // Add this line

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function App() {
  const appStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // This will make sure the div takes the full height of the viewport
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App" style={appStyle}>
      <Container component="main" maxWidth="xs" disableGutters>
          <CssBaseline />
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

            <Luckygames />

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
      </div>
    </ThemeProvider>
  );
}

export default App;