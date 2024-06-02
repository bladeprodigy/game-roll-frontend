import {ChangeEvent, FormEvent, useState} from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { GameForm } from '../Interfaces/GameForm';
import { createAPI } from '../Utils/api.ts';
import {GameData} from "../Interfaces/GameData.ts";

const EditGameForm = ({ id, name, description, price, publisher }: GameData) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<GameForm>({
        name: name,
        description: description,
        price: price,
        publisher: publisher
    });
    const api = createAPI();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        api.put(`/games/${id}`, formData)
            .then(() => {
                handleClose();
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <Button variant="contained" color="primary" sx={{width: '150px', height: '50px'}}
                    onClick={handleOpen}>Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Game</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField margin="dense" name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth required />
                        <TextField margin="dense" name="description" label="Description" value={formData.description} onChange={handleChange} fullWidth required />
                        <TextField margin="dense" name="price" label="Price" value={formData.price} onChange={handleChange} fullWidth required />
                        <TextField margin="dense" name="publisher" label="Publisher" value={formData.publisher} onChange={handleChange} fullWidth required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" color="primary">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default EditGameForm;