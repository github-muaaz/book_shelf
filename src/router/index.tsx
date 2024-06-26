import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import LayoutManager from '../layout/layoutManager';
const SignUpPage = lazy(() => import('../modules/auth/sign-up'));
const BookListPage = lazy(() => import('../modules/book/book-list'));
const HomePage = lazy(() => import('../modules/home'))

const AppRouter = () => {
    return (
        <BrowserRouter>
            <LayoutManager>
                <Suspense fallback={<div>Lazy Loading...</div>}>
                    <Routes>
                        <Route path="/sign-up" element={<SignUpPage />} />

                        <Route path="/books" element={<BookListPage />} />

                        <Route path="/" element={<HomePage/>}/>

                        <Route path="*" element={<Navigate to="/404" />} />
                    </Routes>
                </Suspense>
            </LayoutManager>
        </BrowserRouter>
    );
};

export default AppRouter;
