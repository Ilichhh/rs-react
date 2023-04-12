import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardFullData, CardPreviewData, CardsResponse } from 'types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getSingleCharacter: build.query<CardFullData, string>({
      query: (id) => `character/${id}`,
    }),
    getCharacters: build.query<CardPreviewData[], string>({
      query: (search) => ({
        url: 'character',
        params: {
          name: search,
        },
      }),
      transformResponse: (response: CardsResponse) => response.results,
    }),
  }),
});

export const { useGetSingleCharacterQuery, useGetCharactersQuery } = rickAndMortyApi;
