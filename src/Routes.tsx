import {useRoutes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage.tsx";
import Roll from "./Pages/Roll.tsx";
import GamePanel from "./Pages/GamePanel.tsx";
import Game from "./Pages/Game.tsx";
import ThankYouPage from "./Pages/ThankYouPage.tsx";
import RegisterPage from "./Pages/RegisterPage.tsx";
import Unauthorized from "./Components/Unauthorized.tsx";
import AdminGames from "./Pages/AdminGames.tsx";
import AdminGame from "./Pages/AdminGame.tsx";

const Routes = () => {
    const currentUserRole = localStorage.getItem('role');
    const isAdmin = currentUserRole === 'ADMIN';

    return useRoutes([
        { path: "/", element: <LoginPage /> },
        { path: "/draw-today-games", element: <Roll /> },
        { path: "/my-today-games", element: <GamePanel /> },
        { path: "/games/:id", element: <Game /> },
        { path: "/thanks", element: <ThankYouPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/unauthorized", element: <Unauthorized /> },
        { path: "/admin/games", element: isAdmin ? <AdminGames /> : <Unauthorized /> },
        { path: "/admin/games/:id", element: isAdmin ? <AdminGame /> : <Unauthorized /> },
    ]);
}

export default Routes;