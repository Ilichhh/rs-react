import React from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { data } from '../../fakeData';
import './Home.scss';

class Home extends React.Component {
  handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  render = () => (
    <div className="home">
      <SearchBar onSearch={this.handleSearch} />
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
