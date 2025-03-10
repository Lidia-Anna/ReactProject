import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Link
                to={`/product/${product.id}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                        height: 200,        // фиксированная высота
                        objectFit: 'contain',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions>
                <Button size="small" onClick={() => onAddToCart(product)}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;