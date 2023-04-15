import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Character from './Character';
import { vi, Mock } from 'vitest';
import { CardFullData } from 'types';
import { getSingleCharacter } from '../../api/api';

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

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockCharData),
  })
) as Mock;

describe('Character component', () => {
  it('should render character data', async () => {
    await act(async () => {
      render(<Character id={mockCharData.id} />);
    });

    await getSingleCharacter(mockCharData.id);

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
