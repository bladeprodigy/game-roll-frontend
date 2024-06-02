import {Container} from '@mui/material';
import React from 'react';
import AfterPurchaseMessage from '../Components/AfterPurchaseMessage';
import TripleButton from '../Components/TripleButton';

const ThankYouPage: React.FC = () => {
    return (
        <Container component="main" maxWidth={false} disableGutters sx={{
            display: 'flex',
            flexDirection: 'Column',
            justifyContent: 'center',
            gap: 5,
        }}>
            <AfterPurchaseMessage/>
            <TripleButton/>
        </Container>
    );
};
export default ThankYouPage;