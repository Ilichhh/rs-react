import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import FormInput from './FormInput';

test('Renders label and input element with correct props', () => {
  const label = 'Item Name';
  const id = 'title';
  const inputRef = createRef<HTMLInputElement>();
  render(<FormInput type="email" label={label} id={id} inputRef={inputRef} errorMessage="" />);
  expect(screen.getByLabelText(label)).toBeInTheDocument();
});

test('Renders error message when provided', () => {
  const errorMessage = 'The length must be at least 3 characters!';
  render(
    <FormInput
      type="text"
      label="Item Name"
      id="title"
      inputRef={createRef()}
      errorMessage={errorMessage}
    />
  );
  expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
