import { render, cleanup } from '@testing-library/react';
import StatusMessage from './StatusMessage';
import React from 'react';

describe('StatusMessage', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders loading message', () => {
    const { getByText } = render(<StatusMessage status="loading" />);
    const loadingMessage = getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders error message', () => {
    const { getByText } = render(<StatusMessage status="error" />);
    const errorMessage = getByText("Eh, we don't seem to have found anything.");
    expect(errorMessage).toBeInTheDocument();
  });
});
