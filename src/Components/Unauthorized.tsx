import { Box, Typography } from '@mui/material';

const Unauthorized = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: 'background.default',
                color: 'text.primary',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Unauthorized
            </Typography>
            <Typography variant="h5" component="p">
                You do not have permission to access this page.
            </Typography>
        </Box>
    );
};

export default Unauthorized;