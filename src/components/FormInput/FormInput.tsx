import React, { Component, RefObject } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  label: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
  errorMessage: string;
}

class FormInput extends Component<FormInputProps> {
  render() {
    const { type, label, id, inputRef, errorMessage } = this.props;
    return (
      <>
        <div className="form-input__wrapper">
          <input type={type} className="form-input" id={id} placeholder=" " ref={inputRef} />
          <label htmlFor={id} className="form-input__label">
            {label}
          </label>
        </div>
        {errorMessage && <span className="form-input__error">Please enter a valid input</span>}
      </>
    );
  }
}

export default FormInput;
