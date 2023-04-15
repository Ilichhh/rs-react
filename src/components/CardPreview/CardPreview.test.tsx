import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Card from './CardPreview';

const testData = {
  id: 1,
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
};

test('Card component renders correctly', () => {
  render(<Card data={testData} />);

  const image = screen.getByAltText('Card preview');
  expect(image).toHaveAttribute('src', testData.image);

  const name = screen.getByText(testData.name);
  expect(name).toBeInTheDocument();

  const status = screen.getByText(testData.status);
  expect(status).toBeInTheDocument();
});
