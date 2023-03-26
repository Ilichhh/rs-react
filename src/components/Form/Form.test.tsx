import { vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import { ProductData } from 'types';

describe('Form', () => {
  const addProductMock: (newProduct: ProductData) => void = vi.fn();

  test('does not call onAddProduct when form is submitted with incomplete data', () => {
    const { getByLabelText, getByText } = render(<Form onAddProduct={addProductMock} />);

    fireEvent.change(getByLabelText('Item Name'), { target: { value: 'My NFT' } });
    fireEvent.change(getByLabelText('Start Price'), { target: { value: -10 } });
    fireEvent.change(getByText('Polygon'), { target: { value: 'Polygon' } });
    fireEvent.click(getByLabelText('testnet'));
    fireEvent.click(getByLabelText('I agree to never, ever, ever put pineapple on pizza'));
    fireEvent.click(getByText('Submit'));

    expect(addProductMock).not.toHaveBeenCalled();
  });
});
