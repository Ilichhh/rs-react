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
  private imageInputRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.titleInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.imageInputRef = React.createRef();
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = this.titleInputRef.current?.value ?? '';
    const date = this.dateInputRef.current?.value ?? '';
    const imageFile = this.imageInputRef.current?.files?.[0];

    let imageSrc = '';
    if (imageFile) {
      imageSrc = URL.createObjectURL(imageFile);
    }

    this.props.onAddProduct({
      title,
      imageSrc,
      date,
    });
    console.log(title, date, imageSrc);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput type="text" label="title" id="title" inputRef={this.titleInputRef} />
        <FormInput type="date" label="date" id="date" inputRef={this.dateInputRef} />
        <AddImageButton inputRef={this.imageInputRef} />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
