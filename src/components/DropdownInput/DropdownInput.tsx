import React from 'react';
import { UseFormRegister, FieldValues, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { registerOptions } from '../../fakeData';
import './DropdownInput.scss';

interface DropdownInputProps {
  id: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const DropdownInput = ({ id, options, register, error }: DropdownInputProps) => {
  const dropdownOptions = [
    <option key="default" value="" hidden>
      Select network
    </option>,
    ...options.map((option: string) => (
      <option key={option} value={option}>
        {option}
      </option>
    )),
  ];

  return (
    <>
      <div className="form-input__wrapper">
        <select className="form-input" id={id} {...register(id, registerOptions[id])}>
          {dropdownOptions}
        </select>
      </div>
      {error && <span className="form-input__error">{error.toString()}</span>}
    </>
  );
};

export default DropdownInput;
