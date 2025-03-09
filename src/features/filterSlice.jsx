import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        status: 'all', // 'all', 'нове', 'в роботі', 'завершене'
    },
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;