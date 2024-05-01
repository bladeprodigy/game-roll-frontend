import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GamePanel from '../Components/GamePanel';
import RightUpper from '../Components/RightUpper';

const Rolled: React.FC = () => {
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
               <GamePanel />
               <RightUpper />
            
            </Box>  
            
        </Container>
    );
};

export default Rolled;