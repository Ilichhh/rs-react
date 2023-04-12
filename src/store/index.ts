import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from 'api/api';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
});