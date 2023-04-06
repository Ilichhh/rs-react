import React from 'react';
import { render, screen } from '@testing-library/react';
import { suite, test, vi } from 'vitest';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import FormInput from './FormInput';

suite('FormInput', () => {
  const label = 'Item Name';
  const id = 'title';
  const type = 'text';
  const register = vi.fn() as UseFormRegister<FieldValues>;

  test('renders input with label', () => {
    const error = undefined;
    render(<FormInput label={label} id={id} type={type} register={register} error={error} />);

    const input = screen.getByLabelText(label);
    const inputLabel = screen.getByText(label);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', type);
    expect(input).toHaveAttribute('id', id);
    expect(input).toHaveAttribute('placeholder', ' ');
    expect(inputLabel).toBeInTheDocument();
  });

  test('renders error message', () => {
    const error = 'This field is required';
    render(<FormInput label={label} id={id} type={type} register={register} error={error} />);

    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
  });
});
