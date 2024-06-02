import { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import { createAPI } from '../Utils/api.ts';
import {DialogProps} from "../Interfaces/DialogProps.ts";
import {useNavigate} from "react-router-dom";

const DeleteGameDialog = ({ id }: DialogProps) => {
    const [open, setOpen] = useState(false);
    const api = createAPI();
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        api.delete(`/games/${id}`)
            .then(() => {
                handleClose();
                navigate('/admin/games');
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <Button variant="contained"  sx={{fontSize: '35px', width: '180px', height: '89px', backgroundColor: 'red' }} onClick={handleOpen}>Delete</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Are you sure you want to delete this game?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} color="secondary">Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteGameDialog;