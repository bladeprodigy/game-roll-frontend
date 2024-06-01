import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

interface IDFormProps {
  value: number;
  onChange: (id: number) => void;
}

const IDForm: React.FC<IDFormProps> = ({ value, onChange }) => (
  <Grid container justifyContent='center'>
    <Grid item xs={4} sm={5} md={5}>
      <TextField
        fullWidth
        label="Game ID"
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        sx={{ backgroundColor: 'white' }}
        InputLabelProps={{ 
          style: { 
            color: '#ad1090',
            transform: 'translateY(-30px)' ,
            textAlign: 'right',
            position: 'absolute', 
            right: 0,
          } 
        }}
        inputProps={{ min: 0 }}
      />
    </Grid>
  </Grid>
);

export default IDForm;