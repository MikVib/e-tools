import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const product = action.payload;
            const index = state.favorites.findIndex((p) => p.id === product.id);
            if (index === -1) {
                state.favorites.push(product);
            }
        },
        removeFromFavorites: (state, action) => {
            const productId = action.payload;
            state.favorites = state.favorites.filter((product) => product.id !== productId);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
