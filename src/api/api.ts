import { CardPreviewData } from 'types';

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
