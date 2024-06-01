import { Box, Container, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import AdminSlide from '../Components/AdminSlide';

interface Game {
  name: string;
  description: string;
  price: number;
  publisher: string;
  
}
const token = localStorage.getItem('jwt');

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


const AddGame = () => {
  const [gameData, setGameData] = useState<Game>({
    name: '',
    description: '',
    price: 0,
    publisher: ''
  });

  const addGame = async (gameData: Game) => {
    try {
      await api.post<Game>('/games', gameData);
    } catch (error) {
      console.error('Failed to add game:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addGame(gameData);
  };

  return (
    <Container component="main" maxWidth={false} disableGutters sx={{
    }}>
      <AdminSlide />
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 200px)'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={5} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Game Name"
                name="name"
                autoFocus
                value={gameData.name}
                onChange={(event) => setGameData({ ...gameData, name: event.target.value })}
                InputProps={{ style: { backgroundColor: 'white' } }}
                InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
              />
            </Grid>
            <Grid item xs={4} sm={5} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Game Description"
                name="description"
                value={gameData.description}
                onChange={(event) => setGameData({ ...gameData, description: event.target.value })}
                InputProps={{ style: { backgroundColor: 'white' } }}
                InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
              />
            </Grid>
            <Grid item xs={4} sm={5} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="price"
                label="Game Price"
                name="price"
                value={gameData.price}
                onChange={(event) => setGameData({ ...gameData, price: Number(event.target.value) })}
                InputProps={{ style: { backgroundColor: 'white' } }}
                InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
              />
            </Grid>
            <Grid item xs={4} sm={5} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="publisher"
                label="Game Publisher"
                name="publisher"
                value={gameData.publisher}
                onChange={(event) => setGameData({ ...gameData, publisher: event.target.value })}
                InputProps={{ style: { backgroundColor: 'white' } }}
                InputLabelProps={{ style: { color: '#ad1090', marginTop: '10px'  }, shrink: true }}
              />
            </Grid>

            <Grid item xs={10}>
              <Box display="flex" justifyContent="center">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                  Add Game
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddGame;