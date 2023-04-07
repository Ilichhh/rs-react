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

  return (
    <>
      <img src={charData.image} alt="Card preview" className="card-preview__image" />
      <div className="card-preview__description">
        <div className="card-preview__name">{charData.name}</div>
        <div className="card-preview__status">{charData.status}</div>
        <div className="card-preview__status">{charData.species}</div>
      </div>
    </>
  );
}

export default Character;
