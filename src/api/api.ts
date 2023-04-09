import { CardPreviewData, CardFullData } from 'types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (
  searchValue?: string
): Promise<CardPreviewData[] | undefined> => {
  try {
    let name;
    if (searchValue) {
      name = `?name=${searchValue}`;
    }
    const res = await fetch(`${BASE_URL}/character${name || ''}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCharacter = async (id: number): Promise<CardFullData | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}/character/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
