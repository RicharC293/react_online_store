import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import MenProducts from '../views/MenProducts';
import WomanProducts from '../views/WomanProducts';
import AllProducts from '../views/AllProducts';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/productDetail/ProductDetail';
import Landing from '../pages/Landing';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Landing></Landing></Layout>} />
                <Route path="/men" element={<LayoutHome><MenProducts /></LayoutHome>} />
                <Route path="/woman" element={<LayoutHome><WomanProducts /></LayoutHome>} />
                <Route path="/child" element={<LayoutHome><AllProducts /></LayoutHome>} />
                <Route path="/product/:productId" element={<Layout><ProductDetail /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

const LayoutHome = ({children}) => (
    <>
        <Header />
        <Home children={children} />
    </>
);

export default GlobalRouter;