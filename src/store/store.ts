import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../api/api';
import searchSlice from '../features/searchSlice';
import productCardsSlice from '../features/productCardsSlice';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    search: searchSlice,
    products: productCardsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
