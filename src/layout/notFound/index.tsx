import {CardMedia} from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import CenterBox from "../../components/elements/center-box";
import React from "react";

const NotFound: React.FC = () => {

    return (
        <CenterBox bg={'transparent'}>
            <Stack
                gap={'72px'}
                direction="column"
                alignItems="center"
            >
                <CardMedia
                    component="img"
                    sx={{width: '100%', display: {xs: 'none', sm: 'block'}}}
                    image="./image/not-found.png"
                    alt="not found"
                />

                <Box
                    display={'flex'}
                    gap={'12px'}
                    sx={{minWidth: '70%'}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => window.location.href = '/'}
                        sx={{
                            backgroundColor: '#6200EE',
                            '&:hover': {
                                backgroundColor: '#6200EE',
                            },
                        }}
                    >
                        Go Home Page
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => window.location.reload()}
                        sx={{
                            color: '#6200EE',
                            borderColor: '#6200EE',
                            '&:hover': {
                                borderColor: '#6200EE',
                            },
                        }}
                    >
                        Reload Page
                    </Button>
                </Box>
            </Stack>
        </CenterBox>
    );
};

export default NotFound;
