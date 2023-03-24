import React, { createRef, RefObject } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import './Form.scss';

interface FormProps {
  title?: string;
}

class Form extends React.Component {
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
