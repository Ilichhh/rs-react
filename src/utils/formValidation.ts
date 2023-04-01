import { ProductData } from 'types';

export const validateForm = (
  product: ProductData
): {
  isValid: boolean;
} => {
  const newState = {
    titleError: '',
    priceError: '',
    dateError: '',
    networkError: '',
    imageError: '',
    mainnetError: '',
    agreementError: '',
    submitMessage: '',
  };

  if (product.title.length < 3) newState.titleError = 'The length must be at least 3 characters!';
  if (product.price < 1) newState.priceError = 'The price should be a positive number!';
  if (new Date(product.date) < new Date() || !product.date)
    newState.dateError = 'The sale cannot end before tomorrow!';
  if (!product.network) newState.networkError = 'Please select a network!';
  if (!product.imageSrc) newState.imageError = 'Please select an image!';
  if (!product.mainnet) newState.mainnetError = 'Please select mainnet or testnet!';
  if (!product.agreement) newState.agreementError = 'What about pineapples?';

  for (const value of Object.values(newState)) {
    if (value)
      return {
        isValid: false,
        newState,
      };
  }
  return {
    isValid: true,
    newState,
  };
};
