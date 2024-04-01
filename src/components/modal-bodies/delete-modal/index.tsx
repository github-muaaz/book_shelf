import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Api from "../../../service/api";
import Icon from "../../elements/icon";
import ModalBodyInterface from "../../../interfaces/Modal";

const DeleteModal: React.FC<ModalBodyInterface> = ({id, onClose}) => {

    const handleDelete = () => {
        //     to Api call to delete
        Api.Delete(`/books/${id}`, true)
            .then(() => onClose())
    }

    return (
        <Stack
            gap={'40px'}
        >
            <Box
                display="flex"
                justifyContent={'space-between'}
                alignItems="center"
            >
                <Typography color={'error'} fontWeight={'700'} sx={{fontSize: '20px'}}>Are you sure to
                    delete?</Typography>

                <Icon pointer onClick={onClose} icon={'close'}/>
            </Box>

            <Box
                display="flex"
                justifyContent={'space-between'}
                alignItems="center"
                gap={'12px'}
            >
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{color: '#6200EE', borderColor: '#6200EE'}}
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        color: '#fff',
                        backgroundColor: '#FF4D4F',
                        '&:hover': {
                            backgroundColor: '#FF4D4F',
                        },
                    }}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </Box>
        </Stack>
    )
}

export default DeleteModal;