import React from 'react';
import { test, expect } from 'vitest';
import { render, act, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import HomePage from './HomePage';
import { store } from '../../store/store';
import { CardPreviewData } from 'types';

describe('HomePage', () => {
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

  const server = setupServer(
    rest.get(`${import.meta.env.VITE_BASE_URL}character`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json({ results: mockCardsData }));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders without crashing and display all cards', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
    });

    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.getByText(mockCardsData[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockCardsData[0].status)).toBeInTheDocument();
    expect(screen.getByText(mockCardsData[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockCardsData[1].status)).toBeInTheDocument();
  });
});
