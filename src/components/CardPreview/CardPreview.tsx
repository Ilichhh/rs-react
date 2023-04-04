import React from 'react';
import './CardPreview.scss';
import type { CardPreviewData } from 'types';

interface CardProps {
  data: CardPreviewData;
}

function Card(props: CardProps) {
  const { name, status, image } = props.data;

  return (
    <div className="card-preview" data-testid="card">
      <img src={image} alt="Card preview" className="card-preview__image" />
      <div className="card-preview__description">
        <div className="card-preview__name">{name}</div>
        <div className="card-preview__status">{status}</div>
      </div>
    </div>
  );
}

export default Card;
