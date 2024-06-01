import React, { useCallback } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BigButton from '../Components/BigButton';
import RightUpper from '../Components/RightUpper';
import axios from 'axios';

const Roll: React.FC = () => {
    const token = localStorage.getItem('jwt');

    const api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fetchData = useCallback(async () => {
        try {
          const response = await api.post('/roll');
          console.log(response.data);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
    }, []);

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
               <BigButton onButtonClick={fetchData} />
                <RightUpper /> 
            </Box>  
            
        </Container>
    );
};

export default Roll;