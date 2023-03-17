import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render = () => (
    <div className="card">
      <h2 className="card__header">This is card</h2>
      <p className="card__descr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio, perspiciatis repellat
        minus repellendus
      </p>
    </div>
  );
}

export default Card;
