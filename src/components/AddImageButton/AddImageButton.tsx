import React from 'react';
import { UseFormRegister, FieldValues, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { registerOptions } from '../../fakeData';
import '../../components/Form/Form.scss';
import './AddImageButton.scss';

interface AddImageButtonProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const AddImageButton = ({ id, register, error }: AddImageButtonProps) => (
  <>
    <input
      className="add-image_hidden"
      type="file"
      accept=".jpg, .jpeg, .png"
      id="image"
      {...register(id, registerOptions[id])}
    />
    <label className="form__button add-image" htmlFor="image">
      <span className="add-image__label">Add an image</span>
    </label>
    {error && <span className="form-input__error">{error.toString()}</span>}
  </>
);

export default AddImageButton;
