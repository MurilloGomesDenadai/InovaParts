import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Home from './pages/home'
import Login from './pages/cliente/loginCliente';
import Cadastro from './pages/cliente/cadastroCliente';
import Compra from './pages/telaCompra';
import Admin from './pages/admin/loginAdmin';
import Cadastrar from './pages/admin/cadastroAdmin';
import Config from './pages/admin/controleProduto';
import Controle from './pages/admin/controleCliente';
import Perfiladmin from './pages/admin/perfilAdmin';
import Produtopage from './pages/Produto';
import PerfilCliente from './pages/cliente/perfilCliente';
import ProdutoCliente from './pages/cliente/produtoCliente';
import Cartao from './pages/cliente/Cartao';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/loginCliente' element = {<Login/>} />
        <Route path='/cadastroCliente' element = {<Cadastro/>} />
        <Route path='/telaCompra' element = {<Compra/>} />
        <Route path='/loginAdmin' element = {<Admin/>} />
        <Route path='/cadastrarAdmin' element = {<Cadastrar/>} />
        <Route path='/controleProduto' element = {<Config/>} />
        <Route path='/alterarProduto/:idparams' element = {<Config/>} />
        <Route path='/controleCliente' element = {<Controle/>} />
        <Route path='/perfilAdmin' element = {<Perfiladmin/>} />
        <Route path='/perfil/:idparams' element = {<Perfiladmin/>} />
        <Route path='/Produto' element = {<Produtopage/>} />
        <Route path='/perfilCliente' element = {<PerfilCliente/>} />
        <Route path='/produtoCliente' element = {<ProdutoCliente/>} />
        <Route path='/Cartao' element = {<Cartao/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


