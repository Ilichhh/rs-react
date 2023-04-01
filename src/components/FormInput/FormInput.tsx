import React from 'react';
import { UseFormRegister, FieldValues, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { formOptions } from '../../fakeData';
import { ProductData } from 'types';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const FormInput = ({ type, label, id, register, error }: FormInputProps) => (
  <>
    <div className="form-input__wrapper">
      <input
        type={type}
        className="form-input"
        id={id}
        placeholder=" "
        {...register(id, formOptions[id])}
      />
      <label htmlFor={id} className="form-input__label">
        {label}
      </label>
    </div>
    {error && <span className="form-input__error">{error.toString()}</span>}
  </>
);

export default FormInput;
