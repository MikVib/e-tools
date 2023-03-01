import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from "../actions/actions"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
    key: 'cart',
    storage: storage,
    blacklist: [],
};
const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItemsFromStorage,
        status: 'idle',
        error: null,
    },
    reducers: {

        addToCart: (state, action) => {
            const item = action.payload;
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === item.id);
            if (itemIndex !== -1) {
                state.cartItems[itemIndex].quantity++;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);
            state.cartItems[itemIndex].quantity++;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity--;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            } else {
                state.cartItems.splice(itemIndex, 1);
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },

        removeItem: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);
            state.cartItems.splice(itemIndex, 1);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        clearCartItems: (state) => {
            state.cartItems = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(updateCart.pending, state => {
                state.status = 'loading';
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cartItems = action.payload;
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export const { addToCart, incrementQuantity, decrementQuantity, removeItem,clearCartItems } = cartSlice.actions;

export default persistedCartReducer;
