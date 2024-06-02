import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import React from "react";
import {GameNameProps} from "../Interfaces/GameNameProps.ts";

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
                    color: '#b00f93',
                    fontFamily: 'BlinkMacSystemFont',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '70px',
                    textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',

                }}>
                {name}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'Column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '500px',
                    overflowX: 'hidden',
                    color: '#ffffff',
                    backgroundColor: 'rgba(54, 54, 54, 0.3)',
                    backdropFilter: 'blur(5px)',
                    wordWrap: 'break-word',
                    mt: 4,
                }}>
                <Typography variant="body1" sx={{
                    color: "white",

                }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default GameName;