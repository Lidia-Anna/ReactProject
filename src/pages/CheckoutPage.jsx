import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import { addOrder } from '../features/ordersSlice';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        deliveryMethod: '',
        paymentMethod: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            id: new Date().getTime(),
            date: new Date().toLocaleString(),
            total: total,
            items: cartItems,
            customer: formData,
        };
        dispatch(addOrder(order));
        dispatch(clearCart());
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Container sx={{ marginTop: 4 }}>
                <Typography variant="h4">Thank you for your order!</Typography>
                <Typography variant="body1">Your order has been successfully placed..</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>Checkout</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    select
                    label="Delivery Method"
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="express">Express</MenuItem>
                </TextField>
                <TextField
                    select
                    label="Payment Method"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="card">Credit Card</MenuItem>
                    <MenuItem value="paypal">PayPal</MenuItem>
                </TextField>
                <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                    Place Order
                </Button>
            </form>
        </Container>
    );
};

export default CheckoutPage;