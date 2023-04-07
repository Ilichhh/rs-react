import React, { useEffect, useState } from 'react';
import { getSingleCharacter } from '../../api/api';
import Loader from '../Loader/Loader';
import type { CardFullData } from 'types';
import './Character.scss';

interface ModalProps {
  id: number;
}

function Character({ id }: ModalProps) {
  const [charData, setCharData] = useState<CardFullData | null>(null);

  useEffect(() => {
    const setChar = async () => {
      const data = await getSingleCharacter(id);
      if (data) {
        setCharData(data);
      }
    };
    setChar();
  }, [id]);

  if (!charData) return <Loader />;

  const { image, name, status, species, type, gender } = charData;

  return (
    <div className="character">
      <img src={image} alt="Card preview" className="character__image" />
      <div className="character__description">
        <div className="character__name">{name}</div>
        <div className="character__param">Status: {status}</div>
        <div className="character__param">Species: {species}</div>
        <div className="character__param">Type: {type}</div>
        <div className="character__param">Gender: {gender}</div>
      </div>
    </div>
  );
}

export default Character;
