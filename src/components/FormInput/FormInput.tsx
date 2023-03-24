import React, { Component, RefObject } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  id: string;
  label: string;
  defaultValue: string;
  pattern?: string;
  required?: boolean;
  title?: string;
}

class FormInput extends Component<FormInputProps> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: FormInputProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const { type, id, label, defaultValue, pattern, required, title } = this.props;

    return (
      <div className="form-input__wrapper">
        <input
          type={type}
          className="form-input"
          id={id}
          value={defaultValue}
          placeholder=" "
          pattern={pattern}
          required={required}
          title={title}
          ref={this.inputRef}
        />
        <label htmlFor={id} className="form-input__label">
          {label}
        </label>
      </div>
    );
  }
}

export default FormInput;
