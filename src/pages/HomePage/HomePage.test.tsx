import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import HomePage from './HomePage';

test('renders home page title', () => {
  render(<HomePage />);

  const title = screen.getByText('Home page');
  expect(title).toBeDefined();
});
