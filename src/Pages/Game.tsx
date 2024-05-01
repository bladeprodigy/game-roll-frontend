import { Box, Container } from "@mui/material";
import GamePic from "../Components/GamePic";
import RightUpper from "../Components/RightUpper";
import GameName from "../Components/GameName";
import Discount from "../Components/Discount";
import Price from "../Components/Price";

const Game: React.FC = () => {
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
                <GamePic />
                <RightUpper />
                <GameName />
                <Discount />
                <Price />
            </Box>
        </Container>
    );
};

export default Game;