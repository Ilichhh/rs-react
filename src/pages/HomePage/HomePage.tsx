import React from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { data } from '../../fakeData';
import './HomePage.scss';

function HomePage() {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className="home">
      <h1>Home page</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
