import React, {useEffect, useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import {useLocation, useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container/Container';
import RightUpper from "../Components/RightUpper.tsx";
import {GameData} from "../Interfaces/GameData.ts";
import {createAPI} from "../Utils/api.ts";

const GamePanel: React.FC = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState<GameData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const location = useLocation();

    const api = createAPI();

    useEffect(() => {
        api.get('/roll')
            .then(response => {
                setGames(response.data.games);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setIsLoading(false);
            });
    }, [location]);

    const handleButtonClick = (gameId: number) => {
        navigate(`/games/${gameId}`);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container component="main" maxWidth={false} disableGutters sx={{
            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            {games[0] && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                }}>
                    <CardMedia component="img" sx={{
                        width: '430px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)',
                        opacity: games[0].buyState ? 0.5 : 1
                    }} image={`http://localhost:8080/img/${games[0].img}`} alt={games[0].name}
                               onClick={games[0].buyState ? undefined : () => handleButtonClick(games[0].id)}/>
                </Box>
            )}
            {games[1] && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}>
                    <CardMedia component="img" height="500" sx={{
                        width: '430px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)',
                        opacity: games[1].buyState ? 0.5 : 1,

                    }} image={`http://localhost:8080/img/${games[1].img}`} alt={games[1].name}
                               onClick={games[1].buyState ? undefined : () => handleButtonClick(games[1].id)}/>
                </Box>
            )}
            {games[2] && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',

                }}>
                    <CardMedia component="img" height="500" sx={{
                        width: '430px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)',
                        opacity: games[2].buyState ? 0.4 : 1,
                        objectPosition: 'center center'

                    }} image={`http://localhost:8080/img/${games[2].img}`} alt={games[2].name}
                               onClick={games[2].buyState ? undefined : () => handleButtonClick(games[2].id)}/>
                </Box>
            )}
            <RightUpper showBackButton={false} />
        </Container>
    )
};

export default GamePanel;