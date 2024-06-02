import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Theme from './theme';
import LoginPage from './Pages/LoginPage';
import Roll from './Pages/Roll';
import Game from './Pages/Game';
import ThankYouPage from './Pages/ThankYouPage';
import RegisterPage from './Pages/RegisterPage';
import GamePanel from './Pages/GamePanel';
import AdminGames from "./Pages/AdminGames.tsx";
import AdminGame from "./Pages/AdminGame.tsx";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/draw-today-games" element={<Roll/>}/>
                    <Route path="/my-today-games" element={<GamePanel/>}/>
                    <Route path="/games/:id" element={<Game/>}/>
                    <Route path='/thanks' element={<ThankYouPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/admin/games' element={<AdminGames/>}/>
                    <Route path='/admin/games/:id' element={<AdminGame/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;