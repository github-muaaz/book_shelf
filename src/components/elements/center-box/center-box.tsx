import React, {ReactNode} from 'react';
import { Box } from '@mui/material';

interface Props {
    bg?: string,
    children: ReactNode,
}

const CenteredDiv: React.FC<Props> = ({bg, children}) => {

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '8px',
                backgroundColor: bg || '#fff',
                minWidth: {xs: 'fit-content', sm: '400px'},
                padding: '48px 28px',
                boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'
            }}
        >
            {children}
        </Box>
    );
};

export default CenteredDiv;
