import {ChangeEvent, useState} from "react";
import {GameForm} from "../Interfaces/GameForm.ts";
import {createAPI} from "../Utils/api.ts";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import TextField from "@mui/material/TextField";

const CreateGameButton = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<GameForm>({
        name: '',
        description: '',
        price: 0,
        publisher: '',
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

    const handleSubmit = () => {
        api.post('/games', formData)
            .then(() => {
                setOpen(false);
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Create Game
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Game</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" name="name" label="Name" fullWidth value={formData.name} onChange={handleChange} />
                    <TextField margin="dense" name="description" label="Description" fullWidth value={formData.description} onChange={handleChange} />
                    <TextField margin="dense" name="price" label="Price" fullWidth value={formData.price} onChange={handleChange} />
                    <TextField margin="dense" name="publisher" label="Publisher" fullWidth value={formData.publisher} onChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateGameButton;