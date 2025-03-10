import React from 'react';
import { Container, Typography, List, ListItem, IconButton, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);

    const handleQuantityChange = (productId, qty) => {
        dispatch(updateQuantity({ productId, quantity: Number(qty) }));
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4">Cart</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1">Cart is empty</Typography>
            ) : (
                <>
                    <List>
                        {cartItems.map(({ product, quantity }) => (
                            <ListItem key={product.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <Typography variant="h6">{product.title}</Typography>
                                    <Typography variant="body2">${product.price}</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                        sx={{ width: '80px', marginRight: 2 }}
                                    />
                                    <IconButton onClick={() => dispatch(removeFromCart(product.id))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h5">Total: ${total}</Typography>
                    <div style={{ marginTop: 20 }}>
                        <Button variant="contained" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
                        <Button variant="contained" component={Link} to="/checkout" sx={{ marginLeft: 2 }}>
                            Checkout
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
};

export default CartPage;