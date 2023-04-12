import React, { useState, useEffect } from 'react';
import CardPreview from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getCharacters } from '../../api/apiOld';
import { CardPreviewData } from 'types';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import './HomePage.scss';

function HomePage() {
  const [cards, setCards] = useState<CardPreviewData[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const setCardsData = async () => {
      setCards(null);
      setIsError(false);
      const cardsData = await getCharacters(searchValue);
      cardsData ? setCards(cardsData) : setIsError(true);
    };
    setCardsData();
  }, [searchValue]);

  let cardsContent;
  if (isError) cardsContent = <StatusMessage status="error" />;
  else if (!cards) cardsContent = <StatusMessage status="loading" />;
  else
    cardsContent = (
      <div className="cards-wrapper">
        {cards.map((item) => (
          <CardPreview key={item.id} data={item} />
        ))}
      </div>
    );

  return (
    <>
      <div className="home">
        <h1>Home page</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {cardsContent}
      </div>
    </>
  );
}

export default HomePage;
