import React from 'react';
import TextField from '@mui/material/TextField';
import {StringFormProps} from "../Interfaces/StringFormProps.ts";

const PasswordField: React.FC<StringFormProps> = ({value, onChange}) => (
    <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={value}
        onChange={onChange}
        sx={{backgroundColor: 'white'}}
        InputLabelProps={{style: {color: '#ad1090', marginTop: '10px'}, shrink: true}}
    />
);

export default PasswordField;