import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { suite, test, vi } from 'vitest';
import Form from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

suite('Form', () => {
  test('renders all input fields', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(getByLabelText('Item Name')).toBeInTheDocument();
    expect(getByLabelText('Start Price')).toBeInTheDocument();
    expect(getByLabelText('End of sale date')).toBeInTheDocument();
    expect(getByText('Select network')).toBeInTheDocument();
    expect(getByLabelText('Add an image')).toBeInTheDocument();
    expect(getByLabelText('mainnet')).toBeInTheDocument();
    expect(getByLabelText('testnet')).toBeInTheDocument();
    expect(getByLabelText(/I agree/)).toBeInTheDocument();
  });

  test('displays error message if required fields are not filled out', async () => {
    const onAddProduct = vi.fn();
    const { findByText, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    fireEvent.click(getByText('Submit'));

    expect(await findByText("Please enter item's name")).toBeInTheDocument();
    expect(await findByText("Please enter item's price")).toBeInTheDocument();
    expect(await findByText('Please enter the end date of the sale')).toBeInTheDocument();
    expect(await findByText('Please select a network!')).toBeInTheDocument();
    expect(await findByText('Please select an image!')).toBeInTheDocument();
    expect(await findByText('Please select mainnet or testnet!')).toBeInTheDocument();
    expect(await findByText('What about pineapples?')).toBeInTheDocument();

    expect(onAddProduct).not.toHaveBeenCalledWith();
  });

  test('display correct values when all required fields are filled out', async () => {
    const mockCreateObjectURL = vi.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    const { getByLabelText, getByRole, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    fireEvent.input(getByLabelText('Item Name'), { target: { value: 'My NFT' } });
    fireEvent.input(getByLabelText('Start Price'), { target: { value: '10' } });
    fireEvent.input(getByLabelText('End of sale date'), { target: { value: '2023-04-30' } });
    fireEvent.select(getByRole('combobox'), { target: { value: 'Polygon' } });
    fireEvent.click(getByRole('radio', { name: 'mainnet' }));
    fireEvent.change(getByLabelText('Add an image'), {
      target: { files: [new File(['gg'], 'test.png')] },
    });
    fireEvent.click(getByLabelText(/I agree/));
    fireEvent.click(getByText('Submit'));

    expect(getByLabelText('Item Name')).toHaveValue('My NFT');
    expect(getByLabelText('Start Price')).toHaveValue(10);
    expect(getByLabelText('End of sale date')).toHaveValue('2023-04-30');
    expect(getByRole('combobox')).toHaveValue('Polygon');
    expect(getByRole('radio', { name: 'mainnet' })).toBeChecked();
    expect(getByLabelText(/I agree/)).toBeChecked();
  });
});
