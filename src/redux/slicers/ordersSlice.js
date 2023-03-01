import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        clearOrders: (state) => {
            state.orders = [];
        },
    },
});

export const { addOrder,clearOrders } = ordersSlice.actions; 
export const selectOrders = state => state.orders.orders;

export default ordersSlice.reducer;
