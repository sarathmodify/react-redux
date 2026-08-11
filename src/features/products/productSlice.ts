import {createAsyncThunk,createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {Product} from './productTypes';

export const fetchProducts = createAsyncThunk<Product[]>('products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch products');
    }
    return data;
});

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products : [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {        
        builder.addCase(fetchProducts.pending, (state) => {
            console.log('Fetching products...',state);
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading = false;
            console.log('Fetched products:', action);
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch products';
        }); 
    },
});

export default productSlice.reducer;
