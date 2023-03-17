import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import './App.scss';

class App extends React.Component {
  render = () => (
    <div className="container">
      <header className="header">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/about">
          About Us
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
