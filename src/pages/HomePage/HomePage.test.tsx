import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import HomePage from './HomePage';

test('Cards list renders correctly', () => {
  render(<HomePage />);

  const cards = screen.getAllByTestId('card');
  expect(cards).toHaveLength(8);
});
