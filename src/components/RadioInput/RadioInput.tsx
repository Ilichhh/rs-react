import React from 'react';
import { UseFormRegister, FieldValues, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { formOptions } from '../../fakeData';
import './RadioInput.scss';

interface RadioInputProps {
  id: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const RadioInput = ({ id, options, register, error }: RadioInputProps) => {
  const radioOptions = options.map((option: string) => (
    <label className="form-input__radio" key={option} htmlFor={`${id}-${option}`}>
      <input
        type="radio"
        id={`${id}-${option}`}
        value={option}
        {...register(id, formOptions[id])}
      />
      {option}
      <span className="form-input__radio-checkmark"></span>
    </label>
  ));

  return (
    <>
      <div className="form-input__wrapper">{radioOptions}</div>
      {error && <span className="form-input__error">{error.toString()}</span>}
    </>
  );
};

export default RadioInput;
