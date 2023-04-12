import React, { useState } from 'react';
import CardPreview from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import './HomePage.scss';
import { useGetCharactersQuery } from '../../api/api';

function HomePage() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const { data, isLoading, isError } = useGetCharactersQuery(searchValue);

  let cardsContent;
  if (isError) cardsContent = <StatusMessage status="error" />;
  else if (isLoading || !data) cardsContent = <StatusMessage status="loading" />;
  else
    cardsContent = (
      <div className="cards-wrapper">
        {data.map((item) => (
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
