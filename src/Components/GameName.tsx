import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';

interface GameNameProps {
    name: string;
    description: string;
}

const GameName: React.FC<GameNameProps> = ({name, description}) => {



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'Center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '30vw'
        }}>
            <Typography
                component="h1"
                variant="h1"
                style={{
                    color: '#ffffff',
                    fontFamily: 'BlinkMacSystemFont',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '100px',
                    textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                }}
            >
                {name}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'Column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    overflowX: 'hidden',
                    color: '#ffffff',
                    backgroundColor: 'rgba(54, 54, 54, 0.5)',
                    backdropFilter: 'blur(20px)',
                    padding: '10px',
                    wordWrap: 'break-word',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#ad1090',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#880073',
                    },
                }} >
            <Typography variant="body1" >
                {description}
            </Typography>
            </Box>

        </Box>
    );
};

export default GameName;