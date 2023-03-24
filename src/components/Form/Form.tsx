import React, { createRef, RefObject } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import { ProductData } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

class Form extends React.Component<FormProps> {
  private inputTitleRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.inputTitleRef = createRef<HTMLInputElement>();
  }

  render = () => {
    return (
      <div className="form">
        <FormInput type="text" id="title" label="title" defaultValue="" />
        <FormInput type="date" id="date" label="date" defaultValue="" />
        <AddImageButton />
        <button type="submit" className="form__button">
          Submit
        </button>
      </div>
    );
  };
}

export default Form;
