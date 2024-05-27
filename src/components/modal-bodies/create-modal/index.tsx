import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Api from "../../../service/api";
import Icon from "../../elements/icon";
import Index from "../../elements/form";
import ModalBodyInterface from "../../../interfaces/Modal";

const CreateModal: React.FC<ModalBodyInterface> = ({ onClose }) => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = { isbn: form.isbn.value };

        setLoading(true);

        Api.PostData('/books', formData, true)
            .then(() => {
                e.currentTarget?.reset();
                onClose();
            })
            .finally(() =>
                setLoading(false)
            );
    }

    return (
        <>
            {loading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(168,165,165,0.8)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        borderRadius: '10px'
                    }}
                >
                    <CircularProgress />
                </Box>
            )}

            <Stack gap={'40px'}>
                <Box display="flex" justifyContent={'space-between'} alignItems="center">
                    <Typography fontWeight={'700'} sx={{ fontSize: '20px' }}>Create a book</Typography>
                    <Icon pointer onClick={onClose} icon={'close'} />
                </Box>

                <Index
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '28px',
                    }}
                >
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel htmlFor="isbn">ISBN</FormLabel>
                        <TextField
                            id="isbn"
                            name="isbn"
                            variant="outlined"
                            placeholder={"____________"}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <Icon icon={'attachment'} color={'grey'} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormControl>

                    <Box display="flex" justifyContent={'space-between'} alignItems="center" gap={'12px'}>
                        <Button
                            fullWidth
                            type={'button'}
                            variant="outlined"
                            sx={{ color: '#6200EE', borderColor: '#6200EE' }}
                            onClick={onClose}
                        >
                            Close
                        </Button>

                        <Button
                            fullWidth
                            type={'submit'}
                            variant="contained"
                            sx={{
                                color: '#fff',
                                backgroundColor: '#6200EE',
                                '&:hover': {
                                    backgroundColor: '#6200EE',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Index>
            </Stack>
        </>
    )
}

export default CreateModal;
