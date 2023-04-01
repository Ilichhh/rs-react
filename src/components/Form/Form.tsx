/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import RadioInput from '../../components/RadioInput/RadioInput';
import { networks, mainnetSelector, formOptions } from '../../fakeData';
import { validateForm } from '../../utils/formValidation';
import { ProductData } from 'types';
import './Form.scss';
import '../FormInput/FormInput.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

function Form({ onAddProduct }: FormProps) {
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const imageFile = imageInputRef.current?.files?.[0];
  //   let imageSrc = '';
  //   if (imageFile) {
  //     imageSrc = URL.createObjectURL(imageFile);
  //   }

  //   const validationData = validateForm(product);
  //   setState(validationData.newState);

  //   if (validationData.isValid) {
  //     onAddProduct(product);
  //     e.currentTarget.reset();
  //     setState((prevState) => ({ ...prevState, submitMessage: 'Your NFT has been placed!' }));
  //     setTimeout(() => {
  //       setState((prevState) => ({ ...prevState, submitMessage: '' }));
  //     }, 2000);
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const onSubmit: SubmitHandler<object> = (data) => {
    const isValid = !Object.keys(errors).length;
    if (isValid) {
      reset();
      clearErrors();
      console.log(data);
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
        Submit
      </button>
    </form>
  );
}

export default Form;
