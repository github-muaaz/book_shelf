import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Api from "../../../service/api";
import Icon from "../../elements/icon";
import ModalBodyInterface from "../../../interfaces/Modal";

const DeleteModal: React.FC<ModalBodyInterface> = ({ id, onClose }) => {
    const handleDelete = () => {
        // Api call to delete
        Api.Delete(`/books/${id}`, true)?.then(() => onClose());
    };

    return (
        <Stack gap={{ xs: '20px', md: '40px' }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography color="error" fontWeight={700} sx={{ fontSize: { xs: '16px', md: '20px' } }}>
                    Are you sure to delete?
                </Typography>
                <Icon pointer onClick={onClose} icon="close" />
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={{ xs: '8px', md: '12px' }}
            >
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        color: '#6200EE',
                        borderColor: '#6200EE',
                        width: { xs: '100%' },
                        fontSize: { xs: '14px', md: 'inherit' },
                    }}
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
                        width: { xs: '100%'},
                        fontSize: { xs: '14px', md: 'inherit' },
                    }}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </Box>
        </Stack>
    );
};

export default DeleteModal;
