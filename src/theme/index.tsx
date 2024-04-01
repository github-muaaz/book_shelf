import {createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import React from "react";

import ChildrenInterface from "../interfaces/Children";

const theme = createTheme({
    typography: {
        fontFamily: "Mulish, sans-serif",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }
                
                .pointer{
                cursor: pointer;
                }

                .no__scroll__bar {
                    overflow: scroll;
                    &::-webkit-scrollbar {
                        width: 0;
                        appearance: none;
                    }
                }
            `,
        },
    },
});

const Theme: React.FC<ChildrenInterface> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
}

export default Theme;
