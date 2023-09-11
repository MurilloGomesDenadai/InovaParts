import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


