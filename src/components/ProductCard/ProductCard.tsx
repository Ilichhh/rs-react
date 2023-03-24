import React from 'react';
import './ProductCard.scss';
import type { ProductData } from 'types';

interface ProductDataProps {
  data: ProductData;
}

class ProductCard extends React.Component<ProductDataProps> {
  render = () => {
    const { title, imageSrc, date } = this.props.data;
    return (
      <div className="card" data-testid="card">
        <img src={imageSrc} alt="Card preview" className="card__image" />
        <div className="card__description">
          <div className="card__number">{title}</div>
          <div className="card__price">{date}</div>
        </div>
      </div>
    );
  };
}

export default ProductCard;
