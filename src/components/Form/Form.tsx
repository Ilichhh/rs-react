import React, { FormEvent, RefObject } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import AddImageButton from '../../components/AddImageButton/AddImageButton';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import RadioInput from '../../components/RadioInput/RadioInput';
import { networks, mainnetSelector } from '../../fakeData';
import { validateForm } from '../../utils/formValidation';
import { ProductData, FormState } from 'types';
import './Form.scss';

interface FormProps {
  onAddProduct: (newProduct: ProductData) => void;
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
      networkError: '',
      imageError: '',
      mainnetError: '',
      agreementError: '',
      submitMessage: '',
    };
  }

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

    const validationData = validateForm(product);
    this.setState(validationData.newState);

    if (validationData.isValid) {
      this.props.onAddProduct(product);
      e.currentTarget.reset();
      this.setState({ submitMessage: 'Your NFT has been placed!' });
      setTimeout(() => {
        this.setState({ submitMessage: '' });
      }, 2000);
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
        <DropdownInput
          id="network"
          options={networks}
          inputRef={this.selectNetworkRef}
          errorMessage={this.state.networkError}
        />
        <AddImageButton inputRef={this.imageInputRef} errorMessage={this.state.imageError} />
        <RadioInput
          id="mainnet"
          options={mainnetSelector}
          inputRefs={this.mainnetRef}
          errorMessage={this.state.mainnetError}
        />
        <Checkbox
          label="I agree to never, ever, ever put pineapple on pizza"
          id="agreement"
          inputRef={this.agreementRef}
          defaultChecked={false}
          errorMessage={this.state.agreementError}
        />
        <button type="submit" className="form__button">
          {this.state.submitMessage || 'Submit'}
        </button>
      </form>
    );
  }
}

export default Form;
