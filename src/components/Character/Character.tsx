import React from 'react';
import StatusMessage from '../StatusMessage/StatusMessage';
import './Character.scss';
import { useGetSingleCharacterQuery } from '../../api/api';

interface ModalProps {
  id: number;
}

function Character({ id }: ModalProps) {
  const { data, isLoading, isError } = useGetSingleCharacterQuery(id.toString());

  if (isError) return <StatusMessage status="error" />;
  if (isLoading || !data) return <StatusMessage status="loading" />;

  const { image, name, status, species, type, gender, origin, location } = data;

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
