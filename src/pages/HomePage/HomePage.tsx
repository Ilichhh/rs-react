import React, { useState, useEffect } from 'react';
import Card from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CardPreviewData } from 'types';
import './HomePage.scss';

function HomePage() {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };
  const [cards, setCards] = useState<CardPreviewData[] | null>(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data.results);
      });
  }, []);

  if (!cards) return <div className="loading">Loading</div>;

  return (
    <div className="home">
      <h1>Home page</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cards-wrapper">
        {cards.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
