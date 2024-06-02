import {ChangeEvent, useState} from 'react';
import { Dialog, DialogTitle, DialogActions, Button, Input } from '@mui/material';
import { createAPI } from '../Utils/api.ts';
import {DialogProps} from "../Interfaces/DialogProps.ts";

const UpdatePhotoDialog = ({ id }: DialogProps) => {
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const api = createAPI();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files ? event.target.files[0] : null);
    };

    const handleUpdate = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            api.post(`/games/img/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    handleClose();
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <>
            <Button variant="contained" sx={{fontSize: '30px', width: '180px', height: '89px', backgroundColor: 'hotpink', lineHeight: '1' }} onClick={handleOpen}>Update Photo</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upload a new photo for this game</DialogTitle>
                <DialogActions>
                    <Input type="file" onChange={handleFileChange} />
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate} color="primary">Upload</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UpdatePhotoDialog;