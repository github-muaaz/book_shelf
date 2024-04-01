import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import MainLayout from './main';
import AuthLayout from './auth';
import NotFoundLayout from './notFound';
import ChildrenInterface from '../interfaces/Children';
import Box from "@mui/material/Box";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F8F8F8 url('/image/bg-img.png') no-repeat;
`;

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
        <Container>
            <Box sx={{padding: {xs: '0', sm: '0 50px'}}}>
                <Layout>{children}</Layout>
            </Box>
        </Container>
    );
};

export default LayoutManager;
