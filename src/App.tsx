import Theme from './theme';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;