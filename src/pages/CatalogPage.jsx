import React from 'react';
import { Container } from '@mui/material';
import ProductList from '../components/ProductList';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const CatalogPage = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <h2>Catalog</h2>
            <ProductList onAddToCart={handleAddToCart} />
        </Container>
    );
};

export default CatalogPage;