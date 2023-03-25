import React, { Component, RefObject } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  label: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
}

class FormInput extends Component<FormInputProps> {
  render() {
    const { type, label, id, inputRef } = this.props;
    return (
      <div className="form-input__wrapper">
        <input type={type} className="form-input" id={id} placeholder=" " ref={inputRef} />
        <label htmlFor={id} className="form-input__label">
          {label}
        </label>
      </div>
    );
  }
}

export default FormInput;
