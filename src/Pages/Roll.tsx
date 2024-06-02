import React, {useCallback} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BigButton from '../Components/BigButton';
import RightUpper from '../Components/RightUpper';
import {createAPI} from "../Utils/api.ts";
import {useNavigate} from "react-router-dom";

const Roll: React.FC = () => {
    const api = createAPI();
    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        try {
            await api.post('/roll');
            navigate('/my-today-games');
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }, [navigate]);

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