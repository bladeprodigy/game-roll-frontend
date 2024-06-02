import {BrowserRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Theme from './theme';
import Routes from "./Routes.tsx";

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