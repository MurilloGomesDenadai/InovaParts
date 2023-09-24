import './index.scss';
import {loginCliente } from '../../../api/clienteEndpoints'

import {Link} from 'react-router-dom'
import {useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';


export default function Login() {
  
  return (
    <div id='pagina-login'>
      <header>

      </header>

      <div id='container'>
        <main>
          <div id='enunciado'>
            Login
          </div>

          <form>
            <div className='caixa-senha'>
              <label>Digite seu Email</label>
              <input type='text' placeholder='Email' />
            </div>

            <div className='caixa-senha'>
              <label>Digite sua Senha</label>
              <input type='text' placeholder='Senha'/>
            </div>
          </form>
          
          <div id='btn-entrar'>
            <button>Entrar</button>
          </div>
    
          <div id ='nav-cadastro'>
            <p>Não possui cadastro? <Link to='/cadastroCliente'><span>Cadastre-se</span></Link></p>
          </div>
        </main>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}


