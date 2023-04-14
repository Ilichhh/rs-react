import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CardPreviewData } from '../types';

interface CharacterCardsState {
  characters: CardPreviewData[];
}

const initialState: CharacterCardsState = {
  characters: [],
};

export const characterCardsSlice = createSlice({
  name: 'characterCards',
  initialState,
  reducers: {
    setCharactersData: (state, action: PayloadAction<CardPreviewData[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharactersData } = characterCardsSlice.actions;
export default characterCardsSlice.reducer;
