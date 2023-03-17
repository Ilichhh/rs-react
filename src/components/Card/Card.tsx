import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render = () => (
    <div className="card">
      <img
        src="https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/24680-e4843c17252bc7d4?w=256"
        alt=""
        className="card__image"
      />
      <div className="card__description">
        <div className="card__number">#7272</div>
        <div className="card__price">13.499 ETH</div>
        <div className="card__last-sale">Last sale: 13.100 ETH</div>
        <div className="card__owner">Owner: Turpur</div>
      </div>
    </div>
  );
}

export default Card;
