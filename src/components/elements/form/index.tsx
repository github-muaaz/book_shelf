import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface Props {
    children: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    sx?: object
}

const Form: React.FC<Props> = ({ children, onSubmit, sx, ...rest }) => { // Updated prop name to onSubmit
    return (
        <form style={{width: '100%'}} onSubmit={onSubmit} {...rest}>
            <Box sx={sx} {...rest}>
                {children}
            </Box>
        </form>
    );
}

export default Form;
