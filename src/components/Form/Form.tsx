/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useRef, useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import RadioInput from '../../components/RadioInput/RadioInput';
import { networks, mainnetSelector } from '../../fakeData';
import { validateForm } from '../../utils/formValidation';
import { ProductData, FormState } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

function Form({ onAddProduct }: FormProps) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const selectNetworkRef = useRef<HTMLSelectElement>(null);
  const mainnetRef = mainnetSelector.map(() => useRef<HTMLInputElement>(null));
  const agreementRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<FormState>({
    titleError: '',
    priceError: '',
    dateError: '',
    networkError: '',
    imageError: '',
    mainnetError: '',
    agreementError: '',
    submitMessage: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageFile = imageInputRef.current?.files?.[0];
    let imageSrc = '';
    if (imageFile) {
      imageSrc = URL.createObjectURL(imageFile);
    }

    const product = {
      title: titleInputRef.current?.value ?? '',
      price: +(priceInputRef.current?.value ?? 0),
      imageSrc,
      date: dateInputRef.current?.value ?? '',
      network: selectNetworkRef.current?.value ?? '',
      mainnet: mainnetRef.find((ref) => ref.current?.checked)?.current?.value ?? '',
      agreement: agreementRef.current?.checked ?? false,
    };

    const validationData = validateForm(product);
    setState(validationData.newState);

    if (validationData.isValid) {
      onAddProduct(product);
      e.currentTarget.reset();
      setState((prevState) => ({ ...prevState, submitMessage: 'Your NFT has been placed!' }));
      setTimeout(() => {
        setState((prevState) => ({ ...prevState, submitMessage: '' }));
      }, 2000);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        label="Item Name"
        id="title"
        inputRef={titleInputRef}
        errorMessage={state.titleError}
      />
      <FormInput
        type="number"
        label="Start Price"
        id="price"
        inputRef={priceInputRef}
        errorMessage={state.priceError}
      />
      <FormInput
        type="date"
        label="End of sale date"
        id="date"
        inputRef={dateInputRef}
        errorMessage={state.dateError}
      />
      <DropdownInput
        id="network"
        options={networks}
        inputRef={selectNetworkRef}
        errorMessage={state.networkError}
      />
      <AddImageButton inputRef={imageInputRef} errorMessage={state.imageError} />
      <RadioInput
        id="mainnet"
        options={mainnetSelector}
        inputRefs={mainnetRef}
        errorMessage={state.mainnetError}
      />
      <Checkbox
        label="I agree to never, ever, ever put pineapple on pizza"
        id="agreement"
        inputRef={agreementRef}
        defaultChecked={false}
        errorMessage={state.agreementError}
      />
      <button type="submit" className="form__button">
        {state.submitMessage || 'Submit'}
      </button>
    </form>
  );
}

export default Form;
