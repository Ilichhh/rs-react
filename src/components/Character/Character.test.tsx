import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import Character from './Character';
import { store } from '../../store/store';
import { CardFullData } from 'types';

describe('Character component', () => {
  const mockCharData: CardFullData = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
  };

  const server = setupServer(
    rest.get(`${import.meta.env.VITE_BASE_URL}character/${mockCharData.id}`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockCharData));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render character data', async () => {
    server.listen();
    await act(async () => {
      render(
        <Provider store={store}>
          <Character id={mockCharData.id} />
        </Provider>
      );
    });

    expect(screen.getByAltText('Card preview')).toBeInTheDocument();
    expect(screen.getByText(mockCharData.name)).toBeInTheDocument();
    expect(screen.getByText(`Status: ${mockCharData.status}`)).toBeInTheDocument();
    expect(screen.getByText(`Species: ${mockCharData.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Type: ${mockCharData.type || '---'}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${mockCharData.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${mockCharData.origin.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${mockCharData.location.name}`)).toBeInTheDocument();
  });
});
