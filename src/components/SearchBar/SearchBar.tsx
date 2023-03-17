import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render = () => (
    <div className="search">
      <input type="text" placeholder="Search" className="search__input" />
    </div>
  );
}

export default SearchBar;
