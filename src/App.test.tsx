import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import App from './App';

describe('App', () => {
  it('Renders Hello world', () => {
    render(<App />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    const expectedText = 'Hello world';

    expect(headingElement.textContent).toEqual(expectedText);
  });
});
