import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Box, Container, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import GameName from "../Components/GameName.tsx";
import Price from "../Components/Price.tsx";
import BuyButton from "../Components/BuyButton.tsx";
import {keyframes} from "@mui/system";
import {GameData} from "../Interfaces/GameData.ts";
import {createAPI} from "../Utils/api.ts";

const Game: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [gameData, setGameData] = useState<GameData | null>(null);
    const navigate = useNavigate();
    const glow = keyframes`
        0%, 100% {
            box-shadow: 0 0 5px #807a14, 0 0 10px #807a14, 0 0 15px #807a14, 0 0 20px #807a14;
        }
        50% {
            box-shadow: 0 0 10px #807a14, 0 0 20px #807a14, 0 0 30px #807a14, 0 0 40px #807a14;
        }`;

    const api = createAPI();

    useEffect(() => {
        api.get(`/roll/${id}`)
            .then(response => {
                setGameData(response.data);
            });
    }, [id]);

    const handleBuyButtonClick = () => {
        api.patch(`/roll/${id}`)
            .then(() => {
                navigate('/thanks');
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (!gameData) {
        return <div>Loading...</div>;
    }

    return (
        <Container component="main" maxWidth={false} disableGutters sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',

            }}>
                <CardMedia
                    component="img"
                    image={`http://localhost:8080/img/${gameData.img}`}
                    alt={gameData.name}
                    sx={{
                        width: '320px',
                        height: '600px',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                    }}/>
                <Typography variant='h6'
                            style={{
                                color: 'white',
                                textShadow: '-1px 0 white, 0 2px black, 1px 0 black, 0 -1px white',
                            }}> Publisher: {gameData.publisher}</Typography>
            </Box>
            <GameName name={gameData.name} description={gameData.description}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',

            }}>
                <Price price={gameData.price}/>
                <BuyButton
                    onClick={handleBuyButtonClick}
                    style={{
                        width: '300px',
                        height: '200px',
                        fontSize: '70px',
                        letterSpacing: '-2px',
                        lineHeight: '1.2',
                        animation: `${glow} 20s infinite`,
                    }}/>
            </Box>
        </Container>
    );
};

export default Game;