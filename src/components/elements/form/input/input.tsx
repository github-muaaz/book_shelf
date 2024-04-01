import { FormControl, FormLabel, InputProps, Input } from "@mui/material";
import React from "react";

interface Props extends InputProps {
    placeholderStyle?: React.CSSProperties;
}

const CustomInput: React.FC<Props> = ({name}) => {
    return(
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
                placeholder="Enter your username"
                // color="neutral"
                // variant="outlined"
                name={name}
                sx={{
                    minWidth: '430px',
                    padding: '12px 16px',
                    border: 'solid 1px #EBEBEB',
                    background: 'transparent',
                    '& input::placeholder': {
                        fontSize: '16px',
                        color: 'rgb(182, 182, 182)',
                        fontWeight: '400'
                    },
                    '& input': {
                        // Add your previous input styles here
                    }
                }}
            />
        </FormControl>
    )
}

export default CustomInput;