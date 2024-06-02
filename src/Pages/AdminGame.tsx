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
import RightUpper from "../Components/RightUpper.tsx";

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
            <Grid container spacing={0}>
                <Grid item xs={12} md={4} pt={9}>
                    <Box sx={{p: 6, paddingLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                        <CardMedia
                            component="img"
                            height="640"
                            image={`http://localhost:8080/img/${game.img}`}
                            alt={game.name}
                        />
                        <Typography variant="h4" component="div" textAlign="center" sx={{mt: 2, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'}}>
                            {game.name}
                        </Typography>
                        <Typography variant="h5" component="div" textAlign="center" sx={{mt: 3, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'}}>
                            Publisher: {game.publisher}
                        </Typography>
                        <Typography variant="h5" component="div" textAlign="center" sx={{mt: 1, color: 'greenyellow'}}>
                            {game.price} $
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{p: 9, mt: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', backdropFilter: 'blur(5px)'}}>
                        <Typography variant="body1" component="div" textAlign="center">
                            {game.description}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{p: 25, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
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
            <RightUpper/>
        </Container>
    );
}
export default GameDetails;