import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import RadioInput from '../../components/RadioInput/RadioInput';
import { networks, mainnetSelector } from '../../fakeData';
import { ProductData } from 'types';
import './Form.scss';
import '../FormInput/FormInput.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

function Form({ onAddProduct }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const [buttonText, setButtonText] = useState('Submit');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const isValid = !Object.keys(errors).length;
    const imageFile = data.image?.[0];
    let imageSrc = '';
    if (imageFile) {
      imageSrc = URL.createObjectURL(imageFile);
    }

    if (isValid) {
      reset();
      clearErrors();
      onAddProduct({
        title: data.title,
        price: data.price,
        imageSrc: imageSrc,
        date: data.date,
        network: data.network,
        mainnet: data.mainnet,
        agreement: data.agreement,
      });
      setButtonText('Your NFT has been placed!');
      setTimeout(() => {
        setButtonText('Submit');
      }, 2000);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="text"
        label="Item Name"
        id="title"
        register={register}
        error={errors.title?.message}
      />
      <FormInput
        type="number"
        label="Start Price"
        id="price"
        register={register}
        error={errors.price?.message}
      />
      <FormInput
        type="date"
        label="End of sale date"
        id="date"
        register={register}
        error={errors.date?.message}
      />
      <DropdownInput
        id="network"
        options={networks}
        register={register}
        error={errors.network?.message}
      />
      <AddImageButton id="image" register={register} error={errors.image?.message} />
      <RadioInput
        id="mainnet"
        options={mainnetSelector}
        register={register}
        error={errors.mainnet?.message}
      />
      <Checkbox
        label="I agree to never, ever, ever put pineapple on pizza"
        id="agreement"
        defaultChecked={false}
        register={register}
        error={errors.agreement?.message}
      />
      <button type="submit" className="form__button">
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
