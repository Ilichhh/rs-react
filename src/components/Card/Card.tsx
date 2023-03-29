import React from 'react';
import './Card.scss';
import type { CardData } from 'types';

interface CardProps {
  data: CardData;
}

function Card(props: CardProps) {
  const { imageSrc, id, price, lastPrice, owner } = props.data;

  return (
    <div className="card" data-testid="card">
      <img src={imageSrc} alt="Card preview" className="card__image" />
      <div className="card__description">
        <div className="card__number">#{id}</div>
        <div className="card__price">{price} ETH</div>
        <div className="card__last-sale">Last sale: {lastPrice} ETH</div>
        <div className="card__owner">Owner: {owner}</div>
      </div>
    </div>
  );
}

export default Card;
