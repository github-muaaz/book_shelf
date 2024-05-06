import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";

import Api from "../../../service/api";
import Icon from "../../elements/icon";
import Index from "../../elements/form";
import ModalBodyInterface from "../../../interfaces/Modal";

const EditModal: React.FC<ModalBodyInterface> = ({ book, onClose }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = {
            status: form.status.value
        };

        Api.PutData(`/books/${book?.id}`, formData, true)
            ?.then(() => {
                e.currentTarget?.reset();
                        onClose();
            })
    }

    return (
        <Stack gap={{ xs: '10px', md: '20px' }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontWeight={700} sx={{ fontSize: { xs: '18px', md: '20px' } }}>Edit a book</Typography>
                <Icon pointer onClick={onClose} icon="close" />
            </Box>

            <Index
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '8px',
                }}
            >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        name={'status'}
                    >
                        <MenuItem value={0}>New</MenuItem>
                        <MenuItem value={1}>Reading</MenuItem>
                        <MenuItem value={2}>Finished</MenuItem>
                    </Select>
                </FormControl>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={{ xs: '8px', md: '12px' }}
                    mt={{ xs: '10px', md: '20px' }}
                >
                    <Button
                        fullWidth
                        type="button"
                        variant="outlined"
                        sx={{ color: '#6200EE', borderColor: '#6200EE' }}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{
                            color: '#fff',
                            backgroundColor: '#6200EE',
                            '&:hover': {
                                backgroundColor: '#6200EE',
                            },
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Index>
        </Stack>
    )
}

export default EditModal;
