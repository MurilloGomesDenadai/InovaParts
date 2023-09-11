import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
              <label>Digite sua Senha</label>
              <input type='text' placeholder='Senha'/>
            </div>

            <div className='caixa-senha'>
              <label>Confirme seu Senha</label>
              <input type='text' placeholder='Confirme'/>
            </div>
          </form>
          
          <div id='btn-entrar'>
            <button>Entrar</button>
          </div>
    
          <div id ='nav-cadastro'>
            <p>Não possui cadastro? <Link to='/'><span>Cadastre-se</span></Link></p>
          </div>
        </main>
      </div>
    </div>
  );
}


