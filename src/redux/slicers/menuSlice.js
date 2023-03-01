import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openMenu: state => {
            state.isOpen = true;
        },
        closeMenu: state => {
            state.isOpen = false;
        },
    },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export const selectMenuOpen = state => state.menu.isOpen;

export default menuSlice.reducer;