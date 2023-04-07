import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Character from '../../components/Character/Character';
import './CardPreview.scss';
import type { CardPreviewData } from 'types';

interface CardPreviewProps {
  data: CardPreviewData;
}

function CardPreview(props: CardPreviewProps) {
  const { name, status, image, id } = props.data;
  const { openModal } = useContext(ModalContext);

  const handleClick = () => openModal(<Character id={id} />);

  return (
    <div className="card-preview" data-testid="card" onClick={handleClick}>
      <img src={image} alt="Card preview" className="card-preview__image" />
      <div className="card-preview__description">
        <div className="card-preview__name">{name}</div>
        <div className="card-preview__status">{status}</div>
      </div>
    </div>
  );
}

export default CardPreview;
