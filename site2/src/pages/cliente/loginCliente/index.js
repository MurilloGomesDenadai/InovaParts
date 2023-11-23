import './index.scss';

import { API_URL } from '../../../api/constants.js';

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import {useState } from 'react';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

  

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();


  async function Login() {
      try {
        if (email != 0 && senha != 0) {
          const resposta = await axios.post(API_URL + '/usuario/login', {
          email: email,
          senha: senha
        });
        storage('usuario-logado', resposta)

        navigate('/telaCompra');

        }else {
          toast.error('Preencha os campos')
        }

      } catch (err) {
        toast.error('Conta não cadastrada!')
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
              <input type='text' onKeyDown={enterClick} placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='caixa-senha'>
              <label>Digite sua Senha</label>
              <input type='password' onKeyDown={enterClick} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
            </div>
          </form>

          
          <div id='btn-entrar'>
          <button onKeyDown={enterClick} onClick={Login}>Entrar</button>
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
