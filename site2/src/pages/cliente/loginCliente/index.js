import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  return (
    <div id='pagina-login'>
      <header>

      </header>

      <div id='container'>
        <div>Login</div>

        <form>
          <label>Digite sua Senha</label>
          <input type='text'/>
          <label>Confirme seu Senha</label>
          <input type='text'/>
        </form>

      <div id='btn-entrar'>
        <button>Entrar</button>
      </div>

      <div>
        <p>Não possui cadastro? <Link to='/'>Cadastre-se</Link></p>
      </div>
      </div>
    </div>
  );
}


