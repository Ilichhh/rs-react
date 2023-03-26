import { test } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Form from './Form';

test('should render all form fields', () => {
  const { getByLabelText } = render(<Form onAddProduct={() => {}} />);
  expect(getByLabelText('Item Name')).toBeInTheDocument();
  expect(getByLabelText('Start Price')).toBeInTheDocument();
  expect(getByLabelText('End of sale date')).toBeInTheDocument();
  expect(getByLabelText('I agree to never, ever, ever put pineapple on pizza')).toBeInTheDocument();
});
