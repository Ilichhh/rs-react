import React, { Component, RefObject } from 'react';
import './Checkbox.scss';

interface CheckboxProps {
  label: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
  defaultChecked: boolean;
}

class Checkbox extends Component<CheckboxProps> {
  render() {
    const { label, id, inputRef, defaultChecked } = this.props;
    return (
      <div className="form-input__wrapper">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          ref={inputRef}
          defaultChecked={defaultChecked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default Checkbox;
