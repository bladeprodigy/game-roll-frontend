import React, { useState } from 'react';
import { Box, Container, Grid, Alert } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import RegisterTexts from '../Components/RegisterTexts';
import Emailform from '../Components/EmailForm';
import PasswordField from '../Components/Passwordform';
import RegisterButton from '../Components/RegisterButton';
import NameForm from '../Components/NameForm';
import SurnameForm from '../Components/SurnameForm';
import AdressForm from '../Components/AdressForm';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  address: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8080', 
});

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      const formData: FormData = {
        email,
        password,
        confirmPassword,
        name,
        surname,
        address,
      };
  
      try {
          const response = await api.post('/auth/register', formData);
  
          console.log(response.data);
          setErrorMessage(null);
          setShouldNavigate(true);
      } catch (error: any) {
          if (error.response && error.response.data.message) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage('Something went wrong.');
          }
      }
  };

    if (shouldNavigate) {
        return <Navigate to="/" />
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
            <RegisterTexts />
            <Box component="form" noValidate sx={{ mt: -12 }} onSubmit={handleSubmit}>
              <Grid container spacing={0} justifyContent="center"> 
                <Grid item xs={8}> 
                  <Emailform value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={8}> 
                  <PasswordField value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={8}> 
                  <PasswordField value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                </Grid>
                <Grid item xs={8}> 
                  <NameForm value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </Grid>
                <Grid item xs={8}>
                  <SurnameForm value={surname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)} />
                </Grid>
                <Grid item xs={8}> 
                  <AdressForm value={address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} />
                </Grid>
                <Grid item xs={5}> 
                  <RegisterButton />
                </Grid>
                {errorMessage && (
                  <Grid container item xs={8} justifyContent="center">
                    <Grid item xs={3}>
                      <Alert severity="error">{errorMessage}</Alert>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Box>
        </Container>
      );
};

export default RegisterPage;