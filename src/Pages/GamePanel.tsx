import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container/Container';


interface Game {
    id: number;
    name: string;
    description: string;
    price: number;
    publisher: string;
    img: string;
}



const GamePanel: React.FC = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState<Game[]>([]);

    const token = localStorage.getItem('jwt');

    const api = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    useEffect(() => {
        api.get('/roll')
            .then(response => {
                setGames(response.data.games);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleButtonClick = (gameId: number) => {
        navigate(`/games/${gameId}`);
    };

    return (
        <Container component="main" maxWidth={false} disableGutters sx={{
            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}
        >
            {games[0] && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                }}>
                    <CardMedia component="img" sx={{
                        width: '320px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                    }} image={`http://localhost:8080/img/${games[0].img}`} alt={games[0].name}
                               onClick={() => handleButtonClick(games[0].id)}/>
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
                        width: '320px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                    }} image={`http://localhost:8080/img/${games[1].img}`} alt={games[1].name}
                               onClick={() => handleButtonClick(games[1].id)}/>
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
                        width: '320px',
                        height: '600px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                    }} image={`http://localhost:8080/img/${games[2].img}`} alt={games[2].name}
                               onClick={() => handleButtonClick(games[2].id)}/>
                </Box>
            )}

        </Container>
    )
};

export default GamePanel;