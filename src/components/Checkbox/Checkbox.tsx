import React from 'react';
import { UseFormRegister, FieldValues, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { registerOptions } from '../../data';
import './Checkbox.scss';

interface CheckboxProps {
  label: string;
  id: string;
  defaultChecked: boolean;
  register: UseFormRegister<FieldValues>;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const Checkbox = ({ label, id, register, defaultChecked, error }: CheckboxProps) => (
  <>
    <div className="form-input__wrapper">
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        {...register(id, registerOptions[id])}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    {error && <span className="form-input__error">{error.toString()}</span>}
  </>
);

export default Checkbox;
