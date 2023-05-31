import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPgae/NotFoundPage";
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
const routes = [
    {
        path : '/',
        exact : true,
        main: () => <HomePage />
    },
    {
        path : '',
        exact : false,
        main: () => <NotFoundPage />
    },
    {
        path : '/product-list',
        exact : false,
        main: () => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main: () => <ProductActionPage />
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main: () => <ProductActionPage />
    },
];
export default routes;