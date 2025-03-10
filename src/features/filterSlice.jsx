import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'all',
    priceRange: [0, 1000],
    search: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
});

export const { setCategory, setPriceRange, setSearch } = filterSlice.actions;
export default filterSlice.reducer;