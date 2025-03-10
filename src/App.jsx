import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </Router>
    );
};

export default App;