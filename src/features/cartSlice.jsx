import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || { items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
            // Записуємо оновлений стан корзини в localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart(state) {
            state.items = [];
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;