import React, { useEffect, useState } from 'react';
import { getSingleCharacter } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import type { CardFullData } from 'types';
import './Modal.scss';

interface ModalProps {
  id: number;
  closeModal: () => void;
}

function Modal({ id, closeModal }: ModalProps) {
  const [charData, setCharData] = useState<CardFullData | null>(null);

  useEffect(() => {
    const setChar = async () => {
      const data = await getSingleCharacter(id);
      if (data) {
        setCharData(data);
      }
    };
    setChar();
  }, []);

  return (
    <div className="modal__background" onClick={closeModal}>
      <div className="modal">
        {charData ? (
          <>
            <img src={charData.image} alt="Card preview" className="card-preview__image" />
            <div className="card-preview__description">
              <div className="card-preview__name">{charData.name}</div>
              <div className="card-preview__status">{charData.status}</div>
              <div className="card-preview__status">{charData.species}</div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Modal;
