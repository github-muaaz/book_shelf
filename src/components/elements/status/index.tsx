import Chip from '@mui/material/Chip';
import React from "react";

interface Props {
    status: number;
}

const Status: React.FC<Props> = ({status}) => {

    const chip = (label: string, color: string) => (<Chip
        label={label}
        size="small"
        sx={{backgroundColor: color, color: 'white', borderRadius: '8px'}}
    />)

    switch (status) {
        case 0: return chip('New', '#FF0000');
        case 1: return chip('Reading', '#FFEC43');
        case 2: return chip('Finished', '#00FF29');
        default: return <></>
    }
}

export default Status;