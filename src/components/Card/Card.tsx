import React from 'react';
import './Card.scss';
import type { CardProps } from 'types';

class Card extends React.Component<CardProps> {
  render = () => {
    const { imageSrc, id, price, lastPrice, owner } = this.props;
    return (
      <div className="card">
        <img src={imageSrc} alt="" className="card__image" />
        <div className="card__description">
          <div className="card__number">#{id}</div>
          <div className="card__price">{price} ETH</div>
          <div className="card__last-sale">Last sale: {lastPrice} ETH</div>
          <div className="card__owner">Owner: {owner}</div>
        </div>
      </div>
    );
  };
}

export default Card;
