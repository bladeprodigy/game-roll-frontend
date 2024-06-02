import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

interface RightUpperProps {
    showBackButton?: boolean;
}

const RightUpper: React.FC<RightUpperProps> = ({ showBackButton = true }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                position: 'absolute',
                top: 5,
                right: 10,
                padding: '1rem',
            }}>
            {showBackButton && (
                <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{
                        fontSize: '1rem',
                        padding: '5px 10px',
                        marginRight: '1rem',
                    }}>
                    <ArrowBackIosIcon sx={{ color: '#ffffff' }} />
                    <Typography
                        component="h1"
                        variant="h6"
                        sx={{
                            color: '#ffffff',
                            fontFamily: 'Arial',
                            textAlign: 'center',
                        }}>
                        BACK
                    </Typography>
                </Button>
            )}
            <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                    fontSize: '1rem',
                    padding: '5px 10px',
                }}>
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                        color: '#ffffff',
                        fontFamily: 'Arial',
                        textAlign: 'center',
                    }}>
                    LOG OUT
                </Typography>
            </Button>
        </Box>
    );
};

export default RightUpper;