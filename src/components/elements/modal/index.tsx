import React, {ReactNode} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    boxShadow: 24,
    borderRadius: '12px',
    p: 4,
};

interface Props {
    children?: ReactNode,
    onClose: () => void,
}

const CustomModal: React.FC<Props> = ({children, onClose}) => {

    return(
        <Modal
            open={!!children}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{minWidth: {xs: 'fit-content', sm: '400px'}, ...style}}>
                {children}
            </Box>
        </Modal>
    )
}

export default CustomModal;