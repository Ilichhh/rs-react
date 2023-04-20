import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../components/Form/Form';
import ProductCard from '../../components/ProductCard/ProductCard';
import './FormPage.scss';

import { RootState } from '../../store/store';

function FormPage() {
  const productsList = useSelector((state: RootState) => state.products.products);

  return (
    <>
      <div className="form-wrapper">
        <h1>Place your NFT for sale</h1>
        <Form />
      </div>
      <div className="cards-wrapper">
        {productsList.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default FormPage;
