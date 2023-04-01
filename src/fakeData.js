export const data = [
  {
    id: 24680,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/24680-e4843c17252bc7d4?w=256',
    price: 15.23,
    lastPrice: 12.34,
    owner: '0x2C9B14746e92cE68468D978C69F5a006Cb3CCF10',
  },
  {
    id: 11780,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/29600-e272cf29c0901b2f?w=256',
    price: 12.11,
    lastPrice: 10.17,
    owner: '0x5a78D839F4088b2C22EFe81c835eB50f47e7A2F0',
  },
  {
    id: 26534,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/24830-87c4293889d86bdc?w=256',
    price: 14.45,
    lastPrice: 14.21,
    owner: '0x4e4A84C81e1a259b6f53A1aa12fBA951c27e16D4',
  },
  {
    id: 19766,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/5005-bd49f04061a23894?w=256',
    price: 25.98,
    lastPrice: 18.18,
    owner: '0xd83bAd8A19dbFD14d1a24271aC89B50842488c2E',
  },
  {
    id: 17653,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/24112-cc07e4848896403e?w=256',
    price: 12.35,
    lastPrice: 11.14,
    owner: '0x46e92cE68468D978C69F5a006Cb3CCF102C9B147',
  },
  {
    id: 22690,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/8230-6991efc5c8f26fdf?w=256',
    price: 18.45,
    lastPrice: 14.95,
    owner: '0x5A2F05a006Cb3CCF102C9B14746e92cE68468D97',
  },
  {
    id: 16783,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/6989-87c78012f6fdac76?w=256',
    price: 21.22,
    lastPrice: 19.88,
    owner: '0x81c835eB50f47e7A2F05a006Cb3CCF102C9B147',
  },
  {
    id: 21889,
    imageSrc:
      'https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/22588-e2e5bf1069326f81?w=256',
    price: 44.54,
    lastPrice: 15.84,
    owner: '0xC69F5a006Cb3CCF102C9B14746e92cE68468D978',
  },
];

export const networks = ['Ethereum', 'Polygon', 'Optimism', 'Arbitrum', 'BNB Chain'];

export const mainnetSelector = ['mainnet', 'testnet'];

export const formOptions = {
  title: {
    required: "Please enter item's name",
    minLength: { value: 3, message: 'The length must be at least 3 characters!' },
  },
  price: {
    required: "Please enter item's price",
    min: { value: 1, message: 'The price should be a positive number!' },
  },
  date: {
    required: 'Please enter sale ends date',
    // minLength: { value: 3, message: 'The sale cannot end before tomorrow!' },
  },
  network: {
    required: 'Please select a network!',
  },
  mainnet: {
    required: 'Please select mainnet or testnet!',
  },
  agreement: {
    required: 'What about pineapples?',
  },
  image: {
    required: 'Please select an image!',
  },
};
