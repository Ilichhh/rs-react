import React, { FormEvent, RefObject } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import { ProductData } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

class Form extends React.Component<FormProps, ProductData> {
  private titleInputRef: RefObject<HTMLInputElement>;
  private dateInputRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.titleInputRef = React.createRef();
    this.dateInputRef = React.createRef();
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = this.titleInputRef.current?.value ?? '';
    const date = this.dateInputRef.current?.value ?? '';

    this.props.onAddProduct({
      title,
      imageSrc: '',
      date,
    });
    console.log(title, date);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput type="text" label="title" id="title" inputRef={this.titleInputRef} />
        <FormInput type="date" label="date" id="date" inputRef={this.dateInputRef} />
        <AddImageButton />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
