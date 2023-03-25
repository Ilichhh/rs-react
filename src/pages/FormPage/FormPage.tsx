import React from 'react';
import Form from '../../components/Form/Form';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductData, Products } from 'types';
import './FormPage.scss';

class FormPage extends React.Component<object, Products> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleAddProduct = (newProduct: ProductData) => {
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  };

  render() {
    return (
      <>
        <div className="form-wrapper">
          <h1>Place your NFT for sale</h1>
          <Form onAddProduct={this.handleAddProduct} />
        </div>
        <div className="cards-wrapper">
          {this.state.products.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </>
    );
  }
}

export default FormPage;
