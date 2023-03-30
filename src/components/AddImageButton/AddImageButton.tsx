import React, { RefObject } from 'react';
import '../../components/Form/Form.scss';
import './AddImageButton.scss';

interface AddImageButtonProps {
  inputRef: RefObject<HTMLInputElement>;
  errorMessage: string;
}

class AddImageButton extends React.Component<AddImageButtonProps> {
  render() {
    const { inputRef, errorMessage } = this.props;
    return (
      <>
        <input
          className="add-image_hidden"
          type="file"
          accept=".jpg, .jpeg, .png"
          id="image"
          ref={inputRef}
        />
        <label className="form__button add-image" htmlFor="image">
          <span className="add-image__label">Add an image</span>
        </label>
        {errorMessage && <span className="form-input__error">{errorMessage}</span>}
      </>
    );
  }
}

export default AddImageButton;
