import React, { useState, useEffect } from 'react';
import Card from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getCharacters } from '../../api/api';
import { CardPreviewData } from 'types';
import './HomePage.scss';
import Modal from '../../components/Modal/Modal';

function HomePage() {
  const [cards, setCards] = useState<CardPreviewData[] | null>(null);
  const [charId, setCharId] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const setCardsData = async () => {
      const cardsData = await getCharacters(searchValue);
      if (cardsData) {
        setCards(cardsData);
      }
    };
    setCardsData();
  }, [searchValue]);

  const openModal = (id: number) => setCharId(id);
  const closeModal = () => setCharId(null);

  return (
    <>
      <div className="home">
        <h1>Home page</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {cards ? (
          <div className="cards-wrapper">
            {cards.map((item) => (
              <Card key={item.id} data={item} openModal={openModal} />
            ))}
          </div>
        ) : (
          <div className="loading">Loading</div>
        )}
      </div>
      {charId && <Modal id={charId} closeModal={closeModal} />}
    </>
  );
}

export default HomePage;
