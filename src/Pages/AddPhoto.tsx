import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IDForm from '../Components/IDForm'; // Import IDForm component
import AdminSlide from '../Components/AdminSlide'; // Import AdminSlide component

interface Game {
  id: number;
  name: string;
  description: string;
  price: number;
  publisher: string;
  img: string; 
}

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const AddPhoto = () => {
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

  return (
    <Container component="main" maxWidth={false} disableGutters>
      <AdminSlide />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', 
          height: 'calc(100vh - 64px)',
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
            <Typography variant="h1">{game.name}</Typography>
            <Typography variant="body1">{game.description}</Typography>
            <Typography variant="body1">{game.price}</Typography>
            <Typography variant="body1">{game.publisher}</Typography>
            <ImageList cols={1}>
              <ImageListItem>
                <img src={game.img} alt={game.name} loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
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

export default AddPhoto;