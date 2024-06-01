import Grid from '@mui/material/Grid';
import WelcomeText from './WelcomeText';
import LuckyGames from './LuckyGames';
import RegisterText from './RegisterText';

const RegisterTexts = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: '40vh', }}
  >
    <Grid item>
      <WelcomeText />
    </Grid>
    <Grid item>
      <LuckyGames />
    </Grid>
    <Grid item>
      <RegisterText />
    </Grid>
  </Grid>
);

export default RegisterTexts;