import React from 'react';
import '../../components/Form/Form.scss';
import './AddImageButton.scss';

class AddImageButton extends React.Component {
  render() {
    return (
      <>
        <input className="add-image_hidden" type="file" id="image" />
        <label className="form__button add-image" htmlFor="image">
          <span className="add-image__label">Add an image</span>
        </label>
      </>
    );
  }
}

export default AddImageButton;
