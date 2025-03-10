import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi';
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';
import ordersReducer from './features/ordersSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        filter: filterReducer,
        orders: ordersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});