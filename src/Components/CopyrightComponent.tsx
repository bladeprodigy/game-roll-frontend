import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const CopyrightComponent = () => (
    <Box mt={8} mb={4} style={{fontWeight: 'bold'}}>
        <Typography variant="body2" color="white" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                LuckyGames
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>
);

export default CopyrightComponent;