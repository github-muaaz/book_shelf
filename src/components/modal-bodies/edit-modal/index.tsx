import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import Api from "../../../service/api";
import Icon from "../../elements/icon";
import Index from "../../elements/form";
import ModalBodyInterface from "../../../interfaces/Modal";

const EditModal: React.FC<ModalBodyInterface> = ({ book, onClose }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        Api.PutData(`/book/${book?.id}`, formData, true)
            .then(() => {
                e.currentTarget.reset();
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
                <FormControl component="fieldset" fullWidth>
                    <FormLabel htmlFor="isbn">ISBN</FormLabel>
                    <TextField
                        id="isbn"
                        name="isbn"
                        variant="outlined"
                        defaultValue={book?.isbn}
                    />
                </FormControl>

                <FormControl component="fieldset" fullWidth>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <TextField
                        id="title"
                        name="title"
                        variant="outlined"
                        defaultValue={book?.title}
                    />
                </FormControl>

                <FormControl component="fieldset" fullWidth>
                    <FormLabel htmlFor="author">Author</FormLabel>
                    <TextField
                        id="author"
                        name="author"
                        variant="outlined"
                        defaultValue={book?.author}
                    />
                </FormControl>

                <FormControl component="fieldset" fullWidth>
                    <FormLabel htmlFor="published">Published</FormLabel>
                    <TextField
                        id="published"
                        name="published"
                        variant="outlined"
                        defaultValue={book?.published}
                    />
                </FormControl>

                <FormControl component="fieldset" fullWidth>
                    <FormLabel htmlFor="pages">Pages</FormLabel>
                    <TextField
                        id="pages"
                        name="pages"
                        variant="outlined"
                        defaultValue={book?.pages}
                    />
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
