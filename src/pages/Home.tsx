import React from 'react';
import Card from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';

class Home extends React.Component {
  render = () => (
    <>
      <SearchBar />
      <div>
        <Card />
      </div>
    </>
  );
}

export default Home;
