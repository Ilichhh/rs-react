import React from 'react';
import { SearchIcon } from '../../assets/icons';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
}

interface SearchBarState {
  value: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue') || '',
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    localStorage.setItem('searchValue', this.state.value);
  }

  handleBeforeUnload = () => {
    localStorage.setItem('searchValue', this.state.value);
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
    this.props.onSearch(value);
  };

  render = () => (
    <div className="search">
      <div className="search__input-wrapper">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
