import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeOrder } from '../features/ordersSlice';

const OrdersPage = () => {
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    const handleDelete = (orderId) => {
        if (window.confirm("Are you sure you want to delete the order?")) {
            dispatch(removeOrder(orderId));
        }
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>My Orders</Typography>
            {orders.length === 0 ? (
                <Typography variant="body1">No orders.</Typography>
            ) : (
                orders.map(order => (
                    <Accordion key={order.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ flexGrow: 1 }}>
                                Date: {order.date} - Cost: ${order.total}
                            </Typography>
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(order.id);
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle1">Order details:</Typography>
                            <List>
                                {order.items.map(item => (
                                    <ListItem key={item.product.id}>
                                        <ListItemText
                                            primary={item.product.title}
                                            secondary={`Кількість: ${item.quantity}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body2">
                                Customer: {order.customer.firstName} {order.customer.lastName}
                            </Typography>
                            <Typography variant="body2">
                                Address: {order.customer.address}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </Container>
    );
};

export default OrdersPage;