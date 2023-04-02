import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductData } from 'types';
import './FormPage.scss';

function FormPage() {
  const [productsList, setProductsList] = useState<ProductData[]>([]);

  const handleAddProduct = (newProduct: ProductData) => {
    setProductsList((prevState) => [...prevState, newProduct]);
  };

  return (
    <>
      <div className="form-wrapper">
        <h1>Place your NFT for sale</h1>
        <Form onAddProduct={handleAddProduct} />
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
