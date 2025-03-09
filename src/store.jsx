import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from './api/tasksApi';
import filterReducer from './features/filterSlice';

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
});