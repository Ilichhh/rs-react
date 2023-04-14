import React from 'react';
import { useSelector } from 'react-redux';

import CardPreview from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import { useGetCharactersQuery } from '../../api/api';
import './HomePage.scss';

import { RootState } from '../../store/store';

function HomePage() {
  const searchValue = useSelector((state: RootState) => state.search.value);
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
        <SearchBar />
        {cardsContent}
      </div>
    </>
  );
}

export default HomePage;
