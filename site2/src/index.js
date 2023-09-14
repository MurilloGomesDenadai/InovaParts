import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/cliente/loginCliente'
import Cadastro from './pages/cliente/cadastroCliente';
import Compra from './pages/telaCompra';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/cadastroCliente' element = {<Cadastro/>} />
        <Route path='/telaCompra' element = {<Compra/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


