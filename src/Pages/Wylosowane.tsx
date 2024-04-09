import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PanelGry from '../Components/PanelGry';
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
               <PanelGry />
               <PrawyGorny />
            
            </Box>  
            
        </Container>
    );
};

export default Losowanie;