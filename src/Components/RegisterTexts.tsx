import Grid from '@mui/material/Grid';
import WelcomeText from './WelcomeText';
import LuckyGames from './LuckyGames.tsx';
import Typography from "@mui/material/Typography";

const RegisterTexts = () => (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{minHeight: '40vh',}}>
        <Grid item>
            <WelcomeText/>
        </Grid>
        <Grid item>
            <LuckyGames/>
        </Grid>
        <Grid item>
            <Typography
                component="h1"
                variant="h6"
                style={{
                    color: '#ad1090',
                    fontFamily: 'BlinkMacSystemFont',
                    textAlign: 'center',
                }}>
                Register to join the community, and draw your first games!
            </Typography>
        </Grid>
    </Grid>
);

export default RegisterTexts;