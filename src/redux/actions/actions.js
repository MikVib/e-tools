import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'fakeShop/fetchProducts',
    async () => {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products);
        return response.data.products;
    }
);

export const fetchProduct = createAsyncThunk(
    'fakeShop/fetchProduct',
    async (id) => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(response.data);
        return response.data;
    }
);

export const searchProducts = createAsyncThunk(
    'fakeShop/searchProducts',
    async (searchTerm) => {
        const response = await axios.get(`https://dummyjson.com/products?search=${searchTerm}`);
        console.log(response.data.products);
        return response.data.products;
    }
);

export const updateCart = createAsyncThunk('cart/updateCart', async (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return cartItems;
});