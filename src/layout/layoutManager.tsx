import React from 'react';
import { useLocation } from 'react-router-dom';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

import MainLayout from './main';
import AuthLayout from './auth';
import NotFoundLayout from './notFound';
import ChildrenInterface from '../interfaces/Children';

const LayoutManager: React.FC<ChildrenInterface> = ({ children }) => {
    const getLayout = (pathname: string) => {
        if (pathname.includes('404')) return 'notFound';

        if (
            pathname === '/' ||
            /^\/sign-in(?=\/|$)/i.test(pathname) ||
            /^\/sign-up(?=\/|$)/i.test(pathname)
        )
            return 'auth';

        return 'main';
    };

    const getLayouts = () => ({
        main: MainLayout,
        auth: AuthLayout,
        notFound: NotFoundLayout,
    });

    const { pathname } = useLocation();

    const Layout = getLayouts()[getLayout(pathname)];

    return (
        <Container
            sx={{
                width: '100vw',
                height: '100vh',
                bgcolor: '#F8F8F8'
            }}
        >
            <Box sx={{padding: {xs: '0', sm: '0 50px'}}}>
                <Layout>{children}</Layout>
            </Box>
        </Container>
    );
};

export default LayoutManager;
