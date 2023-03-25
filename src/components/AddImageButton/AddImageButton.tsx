import React, { RefObject } from 'react';
import '../../components/Form/Form.scss';
import './AddImageButton.scss';

interface AddImageButtonProps {
  inputRef: RefObject<HTMLInputElement>;
}

class AddImageButton extends React.Component<AddImageButtonProps> {
  render() {
    const { inputRef } = this.props;
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
      </>
    );
  }
}

export default AddImageButton;
