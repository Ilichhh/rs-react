import { test, expect, vi, Mock } from 'vitest';
import { render, act, cleanup } from '@testing-library/react';
import { CardPreviewData } from 'types';
import { getCharacters } from '../../api/api';

import React from 'react';
import HomePage from './HomePage';

const mockCardsData: CardPreviewData[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Adjudicator Rick',
    status: 'Dead',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
  },
];

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockCardsData),
  })
) as Mock;

describe('HomePage', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders without crashing', () => {
    act(() => {
      render(<HomePage />);
    });

    expect(document.querySelector('.home')).toBeInTheDocument();
  });

  test('displays loading message when cards are null', () => {
    act(() => {
      render(<HomePage />);
    });

    expect(document.querySelector('.status-message')).toHaveTextContent('Loading...');
  });

  test('displays error message when cards are not retrieved', async () => {
    act(() => {
      render(<HomePage />);
    });

    await getCharacters('Rick');
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(document.querySelector('.status-message')).toHaveTextContent(
      "Eh, we don't seem to have found anything."
    );
  });
});
