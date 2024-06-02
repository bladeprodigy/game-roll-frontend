import React from 'react';
import TextField from '@mui/material/TextField';
import {StringFormProps} from "../Interfaces/StringFormProps.ts";

const NameForm: React.FC<StringFormProps> = ({value, onChange}) => (
    <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={value}
        onChange={onChange}
        sx={{backgroundColor: 'white'}}
        InputLabelProps={{style: {color: '#ad1090', marginTop: '10px'}, shrink: true}}
    />
);

export default NameForm;