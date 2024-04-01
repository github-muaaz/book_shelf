import ReactDOM from "react-dom";
import { StyledEngineProvider } from '@mui/material/styles';

import Router from "./router";
import Theme from "./theme";

import 'react-toastify/dist/ReactToastify.css';
import React from "react";

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <StyledEngineProvider injectFirst>
                <Router/>
            </StyledEngineProvider>
        </Theme>
    </React.StrictMode>,
    document.getElementById('root')
);
