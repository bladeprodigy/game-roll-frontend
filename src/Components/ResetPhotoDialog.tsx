import { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import { createAPI } from '../Utils/api.ts';
import {DialogProps} from "../Interfaces/DialogProps.ts";

const ResetPhotoDialog = ({ id }: DialogProps) => {
    const [open, setOpen] = useState(false);
    const api = createAPI();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        api.delete(`/games/img/${id}`)
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
            <Button variant="contained" sx={{fontSize: '30px', width: '180px', height: '89px', backgroundColor: 'main', lineHeight: '1' }} onClick={handleOpen}>Reset Photo</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Are you sure you want to reset the photo for this game?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleReset} color="secondary">Reset</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ResetPhotoDialog;