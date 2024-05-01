import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './theme';
import LoginPage from './Pages/LoginPage';
import Roll from './Pages/Roll';
import Rolled from './Pages/Rolled';
import Game from './Pages/Game';
import ThankYouPage from './Pages/ThankYouPage';
import Profile from './Pages/Profile';
import Libra from './Pages/Libra';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline /> 
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/roll" element={<Roll />} />
            <Route path="/rolled" element={<Rolled />} />
            <Route path="/Game" element={<Game />} />
            <Route path='/Thanks' element={<ThankYouPage />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Libra' element={<Libra />} />
            
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;