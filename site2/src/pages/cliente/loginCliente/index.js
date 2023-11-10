import './index.scss';

import { useNavigate } from 'react-router-dom';
import {useState } from 'react';

import axios from 'axios';
import { API_URL } from '../../../api/constants.js';

import { ToastContainer, toast } from 'react-toastify';

  

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();


  async function Login() {
      try {
        const resposta = await axios.post(API_URL + '/usuario/login', {
          email: email,
          senha: senha
        });

        navigate('/telaCompra');

      } catch (err) {
        toast.error('Conta inválida')
      }
  }

  function enterClick(e) {
    if(e.key === 'Enter'){
      Login()
    }
  }
    
  

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
              <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='caixa-senha'>
              <label>Digite sua Senha</label>
              <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
            </div>
          </form>

          
          <div id='btn-entrar'>
          <button  onClick={Login}>Entrar</button>
          </div>
    
          <div id ='nav-cadastro'>
            <p>Não possui cadastro? <a href='/cadastroCliente'><span>Cadastre-se</span></a></p>
          </div>
        </main>
        <div><ToastContainer /></div>
      </div>
    </div>
  )
}
