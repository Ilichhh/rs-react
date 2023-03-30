import React, { RefObject } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  label: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
  errorMessage: string;
}

const FormInput = ({ type, label, id, inputRef, errorMessage }: FormInputProps) => (
  <>
    <div className="form-input__wrapper">
      <input type={type} className="form-input" id={id} placeholder=" " ref={inputRef} />
      <label htmlFor={id} className="form-input__label">
        {label}
      </label>
    </div>
    {errorMessage && <span className="form-input__error">{errorMessage}</span>}
  </>
);

export default FormInput;
