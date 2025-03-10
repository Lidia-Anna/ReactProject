import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../api/productsApi';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, error } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(1);

    const handleAddToCart = () => {

        dispatch(addToCart(product));
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4">{product.title}</Typography>
            <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
            <Typography variant="h6">${product.price}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <div style={{ marginTop: 20 }}>
                <TextField
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    sx={{ width: '100px', marginRight: 2 }}
                />
                <Button variant="contained" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </div>
        </Container>
    );
};

export default ProductPage;