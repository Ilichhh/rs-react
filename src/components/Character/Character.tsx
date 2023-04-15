import React, { useEffect, useState } from 'react';
import { getSingleCharacter } from '../../api/api';
import StatusMessage from '../StatusMessage/StatusMessage';
import type { CardFullData } from 'types';
import './Character.scss';

interface ModalProps {
  id: number;
}

function Character({ id }: ModalProps) {
  const [charData, setCharData] = useState<CardFullData | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const setChar = async () => {
      setIsError(false);
      const data = await getSingleCharacter(id);
      data ? setCharData(data) : setIsError(true);
    };
    setChar();
  }, [id]);

  if (isError) return <StatusMessage status="error" />;
  if (!charData) return <StatusMessage status="loading" />;

  const { image, name, status, species, type, gender, origin, location } = charData;

  return (
    <div className="character">
      <img src={image} alt="Card preview" className="character__image" />
      <div className="character__description">
        <div className="character__name">{name}</div>
        <div className="character__param">Status: {status}</div>
        <div className="character__param">Species: {species}</div>
        <div className="character__param">Type: {type || '---'}</div>
        <div className="character__param">Gender: {gender}</div>
        <div className="character__param">Origin: {origin.name}</div>
        <div className="character__param">Location: {location.name}</div>
      </div>
    </div>
  );
}

export default Character;
