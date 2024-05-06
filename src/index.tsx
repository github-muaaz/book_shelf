import React from "react";
import ReactDOM from "react-dom";
import {StyledEngineProvider} from '@mui/material/styles';
import {ToastContainer} from "react-toastify";

import Router from "./router";
import Theme from "./theme";
import Auth from "./service/auth";

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <Auth>
                <StyledEngineProvider injectFirst>
                    <Router/>
                </StyledEngineProvider>
            </Auth>
        </Theme>

        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);
