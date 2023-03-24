import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import './App.scss';

class App extends React.Component {
  render = () => (
    <>
      <header className="header">
        <div className="container">
          <Link className="header__link" to="/">
            Home
          </Link>
          <Link className="header__link" to="/form">
            Form
          </Link>
          <Link className="header__link" to="/about">
            About Us
          </Link>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
