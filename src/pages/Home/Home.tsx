import React from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { data } from '../../fakeData';
import './Home.scss';

class Home extends React.Component {
  render = () => (
    <div className="home">
      <SearchBar />
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            imageSrc={item.imageSrc}
            price={item.price}
            lastPrice={item.lastPrice}
            owner={item.owner}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
