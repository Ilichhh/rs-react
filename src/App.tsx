import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
