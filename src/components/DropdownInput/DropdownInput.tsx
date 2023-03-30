import React, { Component, RefObject } from 'react';
import './DropdownInput.scss';

interface DropdownInputProps {
  id: string;
  options: string[];
  inputRef: RefObject<HTMLSelectElement>;
  errorMessage: string;
}

class DropdownInput extends Component<DropdownInputProps> {
  render() {
    const { id, options, inputRef, errorMessage } = this.props;

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
          <select className="form-input" id={id} ref={inputRef}>
            {dropdownOptions}
          </select>
        </div>
        {errorMessage && <span className="form-input__error">{errorMessage}</span>}
      </>
    );
  }
}

export default DropdownInput;
