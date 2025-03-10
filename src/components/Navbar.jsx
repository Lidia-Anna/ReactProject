import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItemsCount = useSelector((state) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                    Internet Shop
                </Typography>
                <Button color="inherit" component={Link} to="/cart">
                    Cart&nbsp;
                    <Badge badgeContent={cartItemsCount} color="secondary" />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;