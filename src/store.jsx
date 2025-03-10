import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi';
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});