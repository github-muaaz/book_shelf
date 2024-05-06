import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import {ToastContainer} from "react-toastify";

import Router from "./router";
import Theme from "./theme";

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <StyledEngineProvider injectFirst>
                <Router/>
            </StyledEngineProvider>
        </Theme>

        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);
