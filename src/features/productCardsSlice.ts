import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductData } from '../types';

interface ProductCardsState {
  products: ProductData[];
}

const initialState: ProductCardsState = {
  products: [],
};

export const productCardsSlice = createSlice({
  name: 'productCards',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductData>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productCardsSlice.actions;
export default productCardsSlice.reducer;
