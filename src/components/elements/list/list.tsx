import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
    items: string[],
}

const CustomList: React.FC<Props> = ({items}) => {

    return (
        <Box component="ul" sx={{listStyleType: 'none', padding: 0}}>
            {items?.map((item, index) => (
                <li key={index}>
                    <Typography variant="body1" style={{fontSize: '14px'}}>
                        {item}
                    </Typography>
                </li>
            ))}
        </Box>
    )
}

export default CustomList;