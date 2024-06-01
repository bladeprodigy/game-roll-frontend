import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './theme';
import LoginPage from './Pages/LoginPage';
import Roll from './Pages/Roll';
import Game from './Pages/Game';
import ThankYouPage from './Pages/ThankYouPage';
import RegisterPage from './Pages/RegisterPage';
import AddPhoto from './Pages/AddPhoto.tsx';
import PutGame from './Pages/PutGame';
import DeleteGame from './Pages/DeleteGame';
import GetAllGames from './Pages/GetAllGames';
import AddGame from './Pages/AddGame';
import AdminPanel from './Pages/AdminPanel';
import GamePanel from './Pages/GamePanel';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline /> 
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/roll" element={<Roll />} />
            <Route path="/rolled" element={<GamePanel />} />
            <Route path="/games/:id" element={<Game />} />
            <Route path='/Thanks' element={<ThankYouPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/add-photo' element={<AddPhoto />} />
            <Route path='/edit-game' element={<PutGame />} />
            <Route path='/delete-game' element={<DeleteGame />} />
            <Route path='/games' element={<GetAllGames />} />
            <Route path='/add-game' element={<AddGame />} />
            <Route path='/admin' element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;