import { validateForm } from './formValidation';
import { ProductData } from 'types';

describe('validateForm', () => {
  const productData: ProductData = {
    title: 'My cool NFT',
    price: 10,
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    network: 'Ethereum',
    imageSrc: 'test_image.png',
    mainnet: 'mainnet',
    agreement: true,
  };

  it('returns true when the product data is valid', () => {
    const { isValid, newState } = validateForm(productData);

    expect(isValid).toBe(true);
    expect(newState).toEqual({
      titleError: '',
      priceError: '',
      dateError: '',
      networkError: '',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });

  it('returns false and the correct error message when the title is too short', () => {
    const invalidProductData = { ...productData, title: 'f' };
    const { isValid, newState } = validateForm(invalidProductData);

    expect(isValid).toBe(false);
    expect(newState).toEqual({
      titleError: 'The length must be at least 3 characters!',
      priceError: '',
      dateError: '',
      networkError: '',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });

  it('returns false and the correct error message when the price is not positive', () => {
    const invalidProductData = { ...productData, price: -1 };
    const { isValid, newState } = validateForm(invalidProductData);

    expect(isValid).toBe(false);
    expect(newState).toEqual({
      titleError: '',
      priceError: 'The price should be a positive number!',
      dateError: '',
      networkError: '',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });

  it('returns false and the correct error message when the sale ends before tomorrow', () => {
    const invalidProductData = {
      ...productData,
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    };
    const { isValid, newState } = validateForm(invalidProductData);

    expect(isValid).toBe(false);
    expect(newState).toEqual({
      titleError: '',
      priceError: '',
      dateError: 'The sale cannot end before tomorrow!',
      networkError: '',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });

  it('returns false and the correct error message when no network is selected', () => {
    const invalidProductData = { ...productData, network: '' };
    const { isValid, newState } = validateForm(invalidProductData);

    expect(isValid).toBe(false);
    expect(newState).toEqual({
      titleError: '',
      priceError: '',
      dateError: '',
      networkError: 'Please select a network!',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });

  it('returns false and the correct error message when no image is added', () => {
    const invalidProductData = { ...productData, imageSrc: '' };
    const { isValid, newState } = validateForm(invalidProductData);

    expect(isValid).toBe(false);
    expect(newState).toEqual({
      titleError: '',
      priceError: '',
      dateError: '',
      networkError: '',
      imageError: 'Please select an image!',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    });
  });
});
