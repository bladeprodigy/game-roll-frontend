import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';
import {keyframes} from '@mui/system';

interface BigButtonProps {
    onButtonClick: () => void;
}

const BigButton: React.FC<BigButtonProps> = ({onButtonClick}) => {
    const theme = useTheme();

    const handleClick = () => {
        onButtonClick();
    };

    const glow = keyframes`
        0%, 100% {
            box-shadow: 0 0 5px ${theme.palette.secondary.main}, 0 0 10px ${theme.palette.secondary.main}, 0 0 15px ${theme.palette.secondary.main}, 0 0 20px ${theme.palette.secondary.main};
        }
        50% {
            box-shadow: 0 0 10px ${theme.palette.secondary.main}, 0 0 20px ${theme.palette.secondary.main}, 0 0 30px ${theme.palette.secondary.main}, 0 0 40px ${theme.palette.secondary.main};
        }`;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    fontSize: '2rem',
                    padding: '70px 100px',
                    backgroundImage: 'url(/gwiazdki.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    animation: `${glow} 20s infinite`,
                }}>
                <Typography
                    component="h1"
                    variant="h2"
                    style={{
                        color: '#ffffff',
                        fontFamily: 'BlinkMacSystemFont',
                        textAlign: 'center',
                        textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                    }}>
                    Draw your games!
                </Typography>
            </Button>
        </Box>
    );
};

export default BigButton;