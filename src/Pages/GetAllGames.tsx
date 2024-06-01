import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSlide from '../Components/AdminSlide';
import SmallGamePic from '../Components/AdminGamePic';

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

const GetAllGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get<Game[]>('/games')
      .then(response => setGames(response.data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <Container component="main" maxWidth={false} disableGutters>
      <AdminSlide />
      <Box
        sx={{
           marginTop: 0,
          display: 'flex',
          flexDirection: 'row-reverse', 
          alignItems: 'flex-end',
          flexWrap: 'wrap', 
          gap: '3rem', 
        }}
      >
        {games.map((game) => (
            <Link to={`/edit-game/`}>
            <SmallGamePic image={`http://localhost:8080/img/${game.img}`} /> 
          </Link>
        ))}
        
      </Box>
      
    </Container>
  );
};

export default GetAllGames;