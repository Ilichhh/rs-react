import React, { RefObject } from 'react';
import './RadioInput.scss';

interface RadioInputProps {
  id: string;
  options: string[];
  inputRefs: RefObject<HTMLInputElement>[];
  errorMessage: string;
}

const RadioInput = ({ id, options, inputRefs, errorMessage }: RadioInputProps) => {
  const radioOptions = options.map((option: string, index) => (
    <label className="form-input__radio" key={option} htmlFor={`${id}-${option}`}>
      <input type="radio" name={id} id={`${id}-${option}`} value={option} ref={inputRefs[index]} />
      {option}
      <span className="form-input__radio-checkmark"></span>
    </label>
  ));

  return (
    <>
      <div className="form-input__wrapper">{radioOptions}</div>
      {errorMessage && <span className="form-input__error">{errorMessage}</span>}
    </>
  );
};

export default RadioInput;
