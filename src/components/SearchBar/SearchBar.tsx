import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../assets/icons';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('searchValue', searchValue);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    props.onSearch(value);
  };

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
