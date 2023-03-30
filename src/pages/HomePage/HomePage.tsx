import React from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { data } from '../../fakeData';
import './HomePage.scss';

class HomePage extends React.Component {
  handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  render = () => (
    <div className="home">
      <h1>Home page</h1>
      <SearchBar onSearch={this.handleSearch} />
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
