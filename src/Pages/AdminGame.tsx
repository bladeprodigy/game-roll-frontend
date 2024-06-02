import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, CardMedia, Container, Typography} from '@mui/material';
import {createAPI} from '../Utils/api.ts';
import {GameData} from "../Interfaces/GameData.ts";
import Grid from "@mui/material/Grid";
import EditGameForm from "../Components/EditGameForm.tsx";
import DeleteGameDialog from "../Components/DeleteGameDialog.tsx";
import ResetPhotoDialog from "../Components/ResetPhotoDialog.tsx";
import UpdateImgDialog from "../Components/UpdateImgDialog.tsx";

const GameDetails = () => {
    const {id} = useParams();
    const [game, setGame] = useState<GameData | null>(null);
    const api = createAPI();

    useEffect(() => {
        api.get(`/games/${id}`)
            .then(response => {
                setGame(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <Container component="main" maxWidth={false} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',

        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={`http://localhost:8080/img/${game.img}`}
                            alt={game.name}
                        />
                        <Typography variant="h5" component="div" textAlign="center" sx={{mt: 2}}>
                            {game.name}
                        </Typography>
                        <Typography variant="h6" component="div" textAlign="center" sx={{mt: 1}}>
                            {game.publisher}
                        </Typography>
                        <Typography variant="h6" component="div" textAlign="center" sx={{mt: 1}}>
                            {game.price}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                        <Typography variant="body1" component="div" textAlign="center">
                            {game.description}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                        <EditGameForm id={game.id}
                                      price={game.price}
                                      publisher={game.publisher}
                                      name={game.name}
                                      description={game.description}/>
                        <DeleteGameDialog id={game.id}/>
                        <UpdateImgDialog id={game.id}/>
                        <ResetPhotoDialog id={game.id}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default GameDetails;