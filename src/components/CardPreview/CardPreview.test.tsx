import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Card from './CardPreview';

const testData = {
  id: 24680,
  imageSrc:
    'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/24680-e4843c17252bc7d4?w=256',
  price: 15.23,
  lastPrice: 12.34,
  owner: '0x2C9B14746e92cE68468D978C69F5a006Cb3CCF10',
};

test('Card component renders correctly', () => {
  render(<Card data={testData} />);

  const image = screen.getByAltText('Card preview');
  expect(image).toHaveAttribute('src', testData.imageSrc);

  const id = screen.getByText(`#${testData.id}`);
  expect(id).toBeInTheDocument();

  const price = screen.getByText(`${testData.price} ETH`);
  expect(price).toBeInTheDocument();

  const lastPrice = screen.getByText(`Last sale: ${testData.lastPrice} ETH`);
  expect(lastPrice).toBeInTheDocument();

  const owner = screen.getByText(`Owner: ${testData.owner}`);
  expect(owner).toBeInTheDocument();
});
