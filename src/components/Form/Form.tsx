import React, { FormEvent, RefObject } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import RadioInput from '../../components/RadioInput/RadioInput';
import { networks, mainnetSelector } from '../../fakeData';
import { ProductData } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
}

interface FormState {
  titleError: string;
  priceError: string;
  dateError: string;
}

class Form extends React.Component<FormProps, FormState> {
  private titleInputRef: RefObject<HTMLInputElement>;
  private priceInputRef: RefObject<HTMLInputElement>;
  private dateInputRef: RefObject<HTMLInputElement>;
  private imageInputRef: RefObject<HTMLInputElement>;
  private selectNetworkRef: RefObject<HTMLSelectElement>;
  private mainnetRef: RefObject<HTMLInputElement>[] = [];
  private agreementRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.titleInputRef = React.createRef();
    this.priceInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.imageInputRef = React.createRef();
    this.selectNetworkRef = React.createRef();
    this.mainnetRef = mainnetSelector.map(() => React.createRef());
    this.agreementRef = React.createRef();
    this.state = {
      titleError: '',
      priceError: '',
      dateError: '',
    };
  }

  validate = (product: ProductData): boolean => {
    const newState: FormState = {
      titleError: '',
      priceError: '',
      dateError: '',
    };

    if (product.title.length < 3) newState.titleError = 'Please enter a valid input';
    if (product.price < 1) newState.priceError = 'Please enter a valid input';

    this.setState(newState);
    for (const value of Object.values(newState)) {
      if (value) return false;
    }
    return true;
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageFile = this.imageInputRef.current?.files?.[0];
    let imageSrc = '';
    if (imageFile) {
      imageSrc = URL.createObjectURL(imageFile);
    }

    const product = {
      title: this.titleInputRef.current?.value ?? '',
      price: +(this.priceInputRef.current?.value ?? 0),
      imageSrc,
      date: this.dateInputRef.current?.value ?? '',
      network: this.selectNetworkRef.current?.value ?? '',
      mainnet: this.mainnetRef.find((ref) => ref.current?.checked)?.current?.value ?? '',
      agreement: this.agreementRef.current?.checked ?? false,
    };

    const isFormValid = this.validate(product);

    if (isFormValid) {
      this.props.onAddProduct(product);
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          label="Item Name"
          id="title"
          inputRef={this.titleInputRef}
          errorMessage={this.state.titleError}
        />
        <FormInput
          type="number"
          label="Start Price"
          id="price"
          inputRef={this.priceInputRef}
          errorMessage={this.state.priceError}
        />
        <FormInput
          type="date"
          label="End of sale date"
          id="date"
          inputRef={this.dateInputRef}
          errorMessage={this.state.dateError}
        />
        <DropdownInput id="network" options={networks} inputRef={this.selectNetworkRef} />
        <AddImageButton inputRef={this.imageInputRef} />
        <RadioInput id="mainnet" options={mainnetSelector} inputRefs={this.mainnetRef} />
        <Checkbox
          label="I agree to never, ever, ever put pineapple on pizza"
          id="agreement"
          inputRef={this.agreementRef}
          defaultChecked={false}
        />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
