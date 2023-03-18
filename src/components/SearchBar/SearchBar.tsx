import React from 'react';
import { SearchIcon } from '../../assets/icons';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render = () => (
    <div className="search">
      <div className="search__input-wrapper">
        <SearchIcon />
        <input type="text" placeholder="Search..." className="search__input" />
      </div>
    </div>
  );
}

export default SearchBar;
