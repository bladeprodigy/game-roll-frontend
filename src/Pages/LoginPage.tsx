import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WelcomeText from '../Components/WelcomeText';
import LuckyGames from '../Components/LuckyGames.tsx';
import EmailFieldForm from '../Components/EmailFieldForm.tsx';
import PasswordField from '../Components/PasswordForm.tsx';
import CopyrightComponent from '../Components/CopyrightComponent';
import Alert from '@mui/material/Alert';
import {Navigate, useNavigate} from 'react-router-dom';
import Typography from "@mui/material/Typography";
import CasinoIcon from "@mui/icons-material/Casino";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {LoginFormData} from "../Interfaces/LoginFormData.ts";
import {ServerResponse} from "../Interfaces/ServerResponse.ts";
import {handleError} from "../Utils/errorHandler.ts";
import {createAPI} from "../Utils/api.ts";
import { Link as MuiLink } from '@mui/material';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shouldNavigate, setShouldNavigate] = useState<string | null>(null);

    const api = createAPI();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData: LoginFormData = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };

        try {
            const response = await api.post<ServerResponse>('/auth/login', formData);
            localStorage.setItem('jwt', response.data.accessToken);
            localStorage.setItem('role', response.data.role);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

            setErrorMessage(null);

            if (response.data.role === 'ADMIN') {
                setShouldNavigate('/admin/games');
            } else if (response.data.role === 'CUSTOMER' && !response.data.rollExists) {
                setShouldNavigate('/draw-today-games');
            } else if (response.data.role === 'CUSTOMER' && response.data.rollExists) {
                setShouldNavigate('/my-today-games');
            } else {
                setShouldNavigate(null);
            }
        } catch (error: unknown) {
            handleError(error, setErrorMessage);
        }
    };

    if (shouldNavigate) {
        return <Navigate to={shouldNavigate}/>
    }
    return (
        <Container component="main" maxWidth={false} disableGutters>
            <Box
                sx={{
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{m: 10, backgroundColor: 'secondary.main', width: 75, height: 75}}>
                    <CasinoIcon fontSize="large"/>
                </Avatar>
                <WelcomeText/>
                <LuckyGames/>
                <Typography
                    component="h1"
                    variant="h6"
                    style={{
                        color: '#ad1090',
                        fontFamily: 'BlinkMacSystemFont',
                        textAlign: 'center',
                    }}>
                    Login to draw your games for today!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 5}}>
                    <EmailFieldForm value={email}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                    <PasswordField value={password}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        style={{fontWeight: 'bold'}}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <MuiLink component="button" onClick={() => navigate('/register')} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </MuiLink>
                        </Grid>
                    </Grid>
                </Box>
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Box>
            <CopyrightComponent/>
        </Container>
    );
}

export default LoginPage;

