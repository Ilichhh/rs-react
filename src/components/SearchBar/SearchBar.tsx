import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchIcon } from '../../assets/icons';
import { setSearchValue } from '../../features/searchSlice';
import './SearchBar.scss';

import { RootState } from '../../store/store';

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setSearchValue(event.currentTarget.value));
    }
  };

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          defaultValue={searchValue}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchBar;
