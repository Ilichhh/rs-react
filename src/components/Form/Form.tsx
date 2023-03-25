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

class Form extends React.Component<FormProps, ProductData> {
  private titleInputRef: RefObject<HTMLInputElement>;
  private dateInputRef: RefObject<HTMLInputElement>;
  private imageInputRef: RefObject<HTMLInputElement>;
  private selectNetworkRef: RefObject<HTMLSelectElement>;
  private mainnetRef: RefObject<HTMLInputElement>[] = [];
  private agreementRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.titleInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.imageInputRef = React.createRef();
    this.selectNetworkRef = React.createRef();
    this.mainnetRef = mainnetSelector.map(() => React.createRef());
    this.agreementRef = React.createRef();
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = this.titleInputRef.current?.value ?? '';
    const date = this.dateInputRef.current?.value ?? '';
    const imageFile = this.imageInputRef.current?.files?.[0];
    const network = this.selectNetworkRef.current?.value ?? '';
    const mainnet = this.mainnetRef.find((ref) => ref.current?.checked)?.current?.value ?? '';
    const agreement = this.agreementRef.current?.checked ?? false;

    let imageSrc = '';
    if (imageFile) {
      imageSrc = URL.createObjectURL(imageFile);
    }

    this.props.onAddProduct({
      title,
      imageSrc,
      date,
      network,
      mainnet,
      agreement,
    });
    console.log(title, date, imageSrc, mainnet);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput type="text" label="title" id="title" inputRef={this.titleInputRef} />
        <FormInput type="date" label="date" id="date" inputRef={this.dateInputRef} />
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
