import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './theme';
import LoginPage from './Pages/LoginPage';
import Losowanie from './Pages/Losowanie';
import Wylosowane from './Pages/Wylosowane';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline /> 
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/roll" element={<Losowanie />} />
            <Route path="/rolled" element={<Wylosowane />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
