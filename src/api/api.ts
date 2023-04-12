import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardFullData } from 'types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getSingleCharacter: builder.query<CardFullData, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetSingleCharacterQuery } = rickAndMortyApi;
