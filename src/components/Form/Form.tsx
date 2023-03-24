import React, { FormEvent } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import { ProductData } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

class Form extends React.Component<FormProps, ProductData> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      title: '',
      imageSrc: '',
      date: '',
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAddProduct(this.state);
    console.log(this.state);
  };

  render = () => {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput type="text" id="title" label="title" defaultValue="" />
        <FormInput type="date" id="date" label="date" defaultValue="" />
        <AddImageButton />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    );
  };
}

export default Form;
