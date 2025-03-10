import React, { useState } from 'react';
import { useGetProductsQuery } from '../api/productsApi';
import ProductCard from './ProductCard';
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSearch } from '../features/filterSlice';
import _ from 'lodash';

const ProductList = ({ onAddToCart }) => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;


    const filteredProducts = products?.filter(product => {
        const matchesCategory = filter.category === 'all' || product.category === filter.category;
        const matchesSearch = product.title.toLowerCase().includes(filter.search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Пагінація
    const paginatedProducts = filteredProducts?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
        setPage(1);
    };

    const handleSearchChange = _.debounce((e) => {
        dispatch(setSearch(e.target.value));
        setPage(1);
    }, 300);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    return (
        <>
            <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleSearchChange}
                />
                <TextField
                    select
                    label="Category"
                    value={filter.category}
                    onChange={handleCategoryChange}
                    variant="outlined"
                    sx={{ width: 200 }}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="men's clothing">Men's Clothing</MenuItem>
                    <MenuItem value="women's clothing">Women's Clothing</MenuItem>
                    <MenuItem value="jewelery">Jewelery</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                </TextField>
            </div>

            <Grid container spacing={2}>
                {paginatedProducts?.map(product => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <ProductCard product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>

            <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
                <Button disabled={page * itemsPerPage >= filteredProducts.length} onClick={() => setPage(page + 1)}>Next</Button>
            </div>
        </>
    );
};

export default ProductList;