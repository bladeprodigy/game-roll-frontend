import React from 'react';
import Typography from '@mui/material/Typography';
import {PriceProps} from "../Interfaces/PriceProps.ts";

const Price: React.FC<PriceProps> = ({price}) => {
    return (
        <Typography
            variant="h1"
            style={{
                color: "greenyellow",
                fontWeight: 'bold',
                textShadow: '-1px 0 black, 0 9px black, 1px 0 black, 0 -1px black',
            }}>
            {price} $
        </Typography>
    );
};

export default Price;