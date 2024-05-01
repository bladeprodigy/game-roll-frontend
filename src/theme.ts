import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100vh',
        },
        body: {
          height: '100vh',
        },
        '#root': {
          height: '100vh',
        },
        '.App': {
          height: '100vh',
        },
        '.MuiContainer-root': {
          height: '100vh',
          backgroundImage: 'url(/back.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
         
        },
      },
    },
  },
});

export default Theme;