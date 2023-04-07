import React, { useState, useEffect } from 'react';
import CardPreview from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getCharacters } from '../../api/api';
import { CardPreviewData } from 'types';
import Loader from '../../components/Loader/Loader';
import './HomePage.scss';

function HomePage() {
  const [cards, setCards] = useState<CardPreviewData[] | null>(null);
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

  return (
    <>
      <div className="home">
        <h1>Home page</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {cards ? (
          <div className="cards-wrapper">
            {cards.map((item) => (
              <CardPreview key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default HomePage;
