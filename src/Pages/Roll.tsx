import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BigButton from '../Components/BigButton';
import RightUpper from '../Components/RightUpper';


const Roll: React.FC = () => {
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
                <RightUpper /> 
            </Box>  
            
        </Container>
    );
};

export default Roll;