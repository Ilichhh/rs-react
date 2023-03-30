import React from 'react';
import './ProductCard.scss';
import type { ProductData } from 'types';

interface ProductDataProps {
  data: ProductData;
}

const ProductCard = ({ data }: ProductDataProps) => {
  const { title, price, imageSrc, date, network, mainnet } = data;
  return (
    <div className="card" data-testid="card">
      <img src={imageSrc} alt="Card preview" className="card__image" width="256" height="256" />
      <div className="card__description">
        <div className="card__title">{title}</div>
        <div className="card__price">{price} ETH</div>
        <div className="card__network">{`${network} (${mainnet})`}</div>
        <div className="card__date">Sale ends: {date}</div>
      </div>
    </div>
  );
};

export default ProductCard;
