import {useEffect, useState} from 'react';
import {createAPI} from '../Utils/api.ts';
import {Box, Card, CardContent, CardMedia, Container, Typography} from '@mui/material';
import {GameData} from "../Interfaces/GameData.ts";
import CreateGameButton from "../Components/CreateGameForm.tsx";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const [games, setGames] = useState<GameData[]>([]);
    const api = createAPI();
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/games')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Container component="main" maxWidth={false} disableGutters>
            <Box display="flex" justifyContent="center" mb={4} pt={4}>
                <CreateGameButton />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2}}>
                {games.map((game) => (
                    <Card key={game.id} sx={{width: 200}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`http://localhost:8080/img/${game.img}`}
                            alt={game.name}
                            onClick={() => navigate(`/admin/games/${game.id}`)}
                            sx={{ cursor: 'pointer' }}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" textAlign="center">
                                {game.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default AdminPage;