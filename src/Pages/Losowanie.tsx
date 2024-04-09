import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BigButton from '../Components/BigButton';
import PrawyGorny from '../Components/PrawyGórny';

const Losowanie: React.FC = () => {
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
                <BigButton />
                <PrawyGorny /> 
            
            
            
            
            
            
            
            
            
            
            </Box>  
            
        </Container>
    );
};

export default Losowanie;