import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProduct, searchProducts } from "../actions/actions"

const initialState = {
    loading: true,
    products: [],
    product: null,
};

export const fakeShopSlice = createSlice({
    name: 'fakeShop',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.products = null;
            })

            

            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(searchProducts.rejected, (state) => {
                state.loading = false;
                state.products = null;
            })


            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
                state.product = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.loading = false;
                state.product = null;
            })
    },
});

export const { actions } = fakeShopSlice
export default fakeShopSlice.reducer;