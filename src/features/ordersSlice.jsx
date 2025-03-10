import { createSlice } from '@reduxjs/toolkit';

const initialOrders = JSON.parse(localStorage.getItem('orders')) || [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: initialOrders,
    },
    reducers: {
        addOrder(state, action) {
            state.orders.push(action.payload);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        removeOrder(state, action) {
            state.orders = state.orders.filter(order => order.id !== action.payload);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        clearOrders(state) {
            state.orders = [];
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
    },
});

export const { addOrder, removeOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;