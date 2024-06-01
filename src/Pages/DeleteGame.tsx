import {Box, Button, Container, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import axios from 'axios';
import IDForm from '../Components/IDForm';
import AdminSlide from '../Components/AdminSlide';
import CardMedia from "@mui/material/CardMedia";

interface Game {
    id: number;
    name: string;
    description: string;
    price: number;
    publisher: string;
    img: string;
}

const token = localStorage.getItem('jwt');

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const DeleteGame = () => {
    const [ID, setID] = useState<number | null>(null);
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        const fetchGame = async (id: number) => {
            try {
                const response = await api.get<Game>(`/games/${id}`);
                setGame(response.data);
            } catch (error) {
                console.error('Failed to fetch game:', error);
            }
        };

        if (ID !== null) {
            fetchGame(ID);
        }
    }, [ID]);

    const handleDelete = async () => {
        if (ID !== null) {
            try {
                await api.delete(`/games/${ID}`);
                setGame(null);
                alert('Game deleted successfully');
            } catch (error) {
                console.error('Failed to delete game:', error);
            }
        }
    };

    return (
        <Container component="main" maxWidth={false} disableGutters>
            <AdminSlide/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: 'calc(100vh - 64px)',
                    gap: '100px',
                }}
            >

              {game && (
                <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',

                    }}
                >
                  <Typography sx={{
                    color: '#ffffff'
                  }} variant="h1">{game.name}</Typography>
                  <Typography sx={{
                    color: '#ffffff'
                  }} variant="body1">{game.description}</Typography>
                  <Typography sx={{
                    color: '#ffffff'
                  }} variant="body1">{game.price}</Typography>
                  <Typography sx={{
                    color: '#ffffff'
                  }} variant="body1">{game.publisher}</Typography>
                  <CardMedia
                      component="img"
                      sx={{
                        width: '200px',
                        height: '400px',
                        position: 'relative',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                      }}
                      image={`http://localhost:8080/img/${game.img}`}
                      alt={game.name}
                  />
                  <Button variant="contained" color="secondary" onClick={handleDelete}>
                    Delete Game
                  </Button>
                </Box>
            )}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-end',
                    }}
                >
                    <IDForm value={ID || 0} onChange={setID}/>
                </Box>
            </Box>
        </Container>
    );
};

export default DeleteGame;