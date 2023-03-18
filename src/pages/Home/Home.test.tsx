import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Home from './Home';

test('Cards list renders correctly', () => {
  render(<Home />);

  const cards = screen.getAllByTestId('card');
  expect(cards).toHaveLength(8);
});
