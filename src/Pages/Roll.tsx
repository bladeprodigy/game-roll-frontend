import React, {useCallback} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BigButton from '../Components/BigButton';
import RightUpper from '../Components/RightUpper';
import {createAPI} from "../Utils/api.ts";

const Roll: React.FC = () => {
    const api = createAPI();

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
                }}>
                <BigButton onButtonClick={fetchData}/>
                <RightUpper/>
            </Box>
        </Container>
    );
};

export default Roll;