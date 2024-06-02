import React, {useState} from 'react';
import {Alert, Box, Container, Grid} from '@mui/material';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import RegisterTexts from '../Components/RegisterTexts';
import EmailFieldForm from '../Components/EmailFieldForm.tsx';
import PasswordField from '../Components/PasswordForm.tsx';
import NameForm from '../Components/NameForm';
import SurnameForm from '../Components/SurnameForm';
import AddressForm from '../Components/AdressForm';
import Button from "@mui/material/Button";
import {handleError} from "../Utils/errorHandler.ts";
import {RegisterFormData} from "../Interfaces/RegisterFormData.ts";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const api = axios.create({
        baseURL: 'http://localhost:8080',
    });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        const formData: RegisterFormData = {
            email,
            password,
            name,
            surname,
            address,
        };

        try {
            await api.post('/auth/register', formData);
            setErrorMessage(null);
            setShouldNavigate(true);
        } catch (error: unknown) {
            handleError(error, setErrorMessage);
        }
    };

    if (shouldNavigate) {
        return <Navigate to="/"/>
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
                <RegisterTexts/>
                <Box component="form" noValidate sx={{mt: -12}} onSubmit={handleSubmit}>
                    <Grid container spacing={0} justifyContent="center">
                        <Grid item xs={8}>
                            <EmailFieldForm value={email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                        </Grid>
                        <Grid item xs={8}>
                            <PasswordField value={password}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                        </Grid>
                        <Grid item xs={8}>
                            <PasswordField value={confirmPassword}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}/>
                        </Grid>
                        <Grid item xs={8}>
                            <NameForm value={name}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={8}>
                            <SurnameForm value={surname}
                                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}/>
                        </Grid>
                        <Grid item xs={8}>
                            <AddressForm value={address}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}/>
                        </Grid>
                        <Grid item xs={5}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                style={{fontWeight: 'bold'}}>
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                    {errorMessage && (
                        <Alert severity="error" sx={{maxWidth: '20%', margin: 'auto', mt: 2}}>{errorMessage}</Alert>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterPage;