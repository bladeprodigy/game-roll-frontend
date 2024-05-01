import { Box, Container } from '@mui/material';
import React from 'react';
import AfterPurchaseMessage from '../Components/AfterPurchaseMessage';
import TripleButton from '../Components/TripleButton';



const ThankYouPage: React.FC = () => {
    return (
        <Container component="main" maxWidth={false} disableGutters>
            <Box
                sx={{
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <AfterPurchaseMessage />
                <TripleButton />
                
            </Box>  
            
        </Container>
    );
};
export default ThankYouPage;