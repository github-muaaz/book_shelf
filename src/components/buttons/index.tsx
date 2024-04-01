import React, {ReactNode, useState} from "react";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";

import Icon from "../elements/icon";
import CustomModal from "../elements/modal";
import EditModal from "../modal-bodies/edit-modal";
import DeleteModal from "../modal-bodies/delete-modal";
import BookInterface from "../../interfaces/Book";

interface PropsBtn {
    book: BookInterface,
}

const Buttons: React.FC<PropsBtn> = ({book}) => {

    const [modalBody, setModalBody] = useState<ReactNode>(null);

    const handleDelete = () => setModalBody(<DeleteModal id={book.id} onClose={() => setModalBody(null)}/>);

    const handleEdit = () => setModalBody(<EditModal book={book} onClose={() => setModalBody(null)}/>);

    return (
        <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems="start"
            gap={'5px'}
        >
            <IconButton
                aria-label="delete"
                onClick={handleDelete}
                sx={{
                    borderRadius: '5px 5px 5px 0',
                    padding: '2px 7px',
                    backgroundColor: '#FF4D4F',
                    '&:hover': {
                        backgroundColor: '#FF4D4F',
                    },
                }}
            >
                <Icon icon={'delete'}/>
            </IconButton>

            <IconButton
                aria-label="edit"
                onClick={handleEdit}
                sx={{
                    borderRadius: '0 5px 5px 5px',
                    padding: '2px 7px',
                    backgroundColor: '#6200EE',
                    '&:hover': {
                        backgroundColor: '#6200EE',
                    },
                }}
            >
                <Icon icon={'edit'}/>
            </IconButton>

            <CustomModal onClose={() => setModalBody(null)}>
                {modalBody}
            </CustomModal>
        </Box>
    )
}

export default Buttons;
