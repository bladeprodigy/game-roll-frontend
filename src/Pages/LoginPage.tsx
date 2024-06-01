import React, {useState} from 'react';
import axios from 'axios';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AvatarComponent from '../Components/AvatarComponent';
import WelcomeText from '../Components/WelcomeText';
import LuckyGames from '../Components/LuckyGames';
import LoginText from '../Components/Logintext';
import Emailform from '../Components/EmailForm';
import PasswordField from '../Components/Passwordform';
import SignInButton from '../Components/Signinbutton';
import CopyrightComponent from '../Components/CopyrightComponent';
import Alert from '@mui/material/Alert';
import {Navigate} from 'react-router-dom';


interface FormData {
    email: string;
    password: string;
}


interface ServerResponse {
    accessToken: string;
    tokenType: string;
    role: string;
    rollExists: boolean;
}


const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shouldNavigate, setShouldNavigate] = useState<string | null>(null);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData: FormData = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };

        try {
            const response = await api.post<ServerResponse>('/auth/login', formData);
            localStorage.setItem('jwt', response.data.accessToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

            setErrorMessage(null);

            if (response.data.role === 'ADMIN') {
                setShouldNavigate('/admin');
            } else if (response.data.role === 'CUSTOMER' && !response.data.rollExists) {
                setShouldNavigate('/roll');
            } else if (response.data.role === 'CUSTOMER' && response.data.rollExists) {
                setShouldNavigate('/rolled');
            } else {
                setShouldNavigate(null);
            }

        } catch (error: unknown) {
            if (error instanceof Error) {
                const { response } = error as { response?: { data: { message?: string, status?: string, timestamp?: string } | Array<{ message: string, status: string, timestamp: string }> } };
                if (response?.data && !Array.isArray(response.data) && response.data.message) {
                    setErrorMessage(response.data.message);
                } else if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
                    setErrorMessage(response.data[0].message);
                } else {
                    setErrorMessage('Something went wrong.');
                }
            } else {
                setErrorMessage('Something went wrong.');
            }
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
                }}
            >
                <AvatarComponent/>
                <WelcomeText/>
                <LuckyGames/>
                <LoginText/>
                <Box  component="form" onSubmit={handleSubmit} noValidate sx={{mt: 5}}>
                    <Emailform  value={email}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                    <PasswordField value={password}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    <SignInButton/>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
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

