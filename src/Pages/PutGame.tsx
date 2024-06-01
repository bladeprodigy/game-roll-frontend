import { Box, Button, Container, Typography, CardMedia, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IDForm from '../Components/IDForm';
import AdminSlide from '../Components/AdminSlide';

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

const PutGame = () => {
    const [ID, setID] = useState<number | null>(null);
    const [gameData, setGameData] = useState<Game | null>(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchGame = async (id: number) => {
            try {
                const response = await api.get<Game>(`/games/${id}`);
                setGameData(response.data);
            } catch (error) {
                console.error('Failed to fetch game:', error);
            }
        };

        if (ID !== null) {
            fetchGame(ID);
        }
    }, [ID]);

    const updateGame = async (id: number, gameData: Game) => {
        try {
            const response = await api.put<Game>(`/games/${id}`, gameData);
            setGameData(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Failed to update game:', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setGameData(prevState => prevState ? { ...prevState, [name]: value } : null);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (ID !== null && gameData !== null) {
            updateGame(ID, gameData);
        }
    };

    return (
        <Container component="main" maxWidth={false} disableGutters>
            <AdminSlide />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: 'calc(100vh - 64px)',
                    gap: '100px',
                }}
            >
                {gameData && !editMode && (
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
                        }} variant="h1">{gameData.name}</Typography>
                        <Typography sx={{
                            color: '#ffffff'
                        }} variant="body1">{gameData.description}</Typography>
                        <Typography sx={{
                            color: '#ffffff'
                        }} variant="body1">{gameData.price}</Typography>
                        <Typography sx={{
                            color: '#ffffff'
                        }} variant="body1">{gameData.publisher}</Typography>
                        <CardMedia
                            component="img"
                            sx={{
                                width: '200px',
                                height: '400px',
                                position: 'relative',
                                borderRadius: '10px',
                                boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)'
                            }}
                            image={`http://localhost:8080/img/${gameData.img}`}
                            alt={gameData.name}
                        />
                        <Button variant="contained" color="primary" onClick={() => setEditMode(true)}>
                            Edit Game
                        </Button>
                    </Box>
                )}
                {gameData && editMode && (
                    <form onSubmit={handleSubmit}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            alignItems: 'center',
                            maxWidth: '300px',
                            justifyContent: 'center',
                            margin: '0 auto'
                        }}>
                        <TextField
                            variant='outlined'
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Game Name"
                            name="name"
                            value={gameData.name}
                            onChange={handleInputChange}
                            sx={{ backgroundColor: 'white' }}
                            InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            label="Game Description"
                            name="description"
                            value={gameData.description}
                            onChange={handleInputChange}
                            sx={{ backgroundColor: 'white' }}
                            InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="Game Price"
                            name="price"
                            value={gameData.price}
                            onChange={handleInputChange}
                            sx={{ backgroundColor: 'white' }}
                            InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="publisher"
                            label="Game Publisher"
                            name="publisher"
                            value={gameData.publisher}
                            onChange={handleInputChange}
                            sx={{ backgroundColor: 'white' }}
                            InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
                        />
                        </Box>
                        <Button type="submit" variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </form>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-end',
                    }}
                >
                    <IDForm value={ID || 0} onChange={setID} />
                </Box>
            </Box>
        </Container>
    );
};

export default PutGame;