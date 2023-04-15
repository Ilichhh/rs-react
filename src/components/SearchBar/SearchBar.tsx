import React, { useEffect } from 'react';
import { SearchIcon } from '../../assets/icons';
import './SearchBar.scss';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ setSearchValue, searchValue }: SearchBarProps) {
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

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchValue(event.currentTarget.value);
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
