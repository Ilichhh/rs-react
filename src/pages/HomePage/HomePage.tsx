import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardPreview from '../../components/CardPreview/CardPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import { useGetCharactersQuery } from '../../api/api';
import './HomePage.scss';

import { RootState } from '../../store/store';
import { setCharactersData } from '../../features/characterCardsSlice';

function HomePage() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);
  const { data, isLoading, isError } = useGetCharactersQuery(searchValue);
  const searchResults = useSelector((state: RootState) => state.characters.characters);

  useEffect(() => {
    if (data) dispatch(setCharactersData(data));
  }, [data, dispatch]);

  let cardsContent;
  if (isError) cardsContent = <StatusMessage status="error" />;
  else if (isLoading || !searchResults) cardsContent = <StatusMessage status="loading" />;
  else
    cardsContent = (
      <div className="cards-wrapper">
        {searchResults.map((item) => (
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
