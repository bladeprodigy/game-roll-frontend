import React from 'react';
import {useNavigate} from 'react-router-dom';
import BuyButton from './BuyButton';
import {Box} from "@mui/material";

const TripleButton: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: '20px'
            }}>
                <BuyButton
                    onClick={() => navigate('/my-today-games')}
                    style={{fontSize: '60px', color: 'white'}}>
                    Buy next game!
                </BuyButton>
                <BuyButton
                    onClick={() => handleLogout()}
                    style={{backgroundColor: 'gray', fontSize: '60px', color: 'white'}}>
                    Logout
                </BuyButton>
            </Box>
        </>
    );
};

export default TripleButton;