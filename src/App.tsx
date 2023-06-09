import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage';
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.scss';

const App = () => (
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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  </>
);

export default App;
