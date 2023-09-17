import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Admin () {
    return (
        <div id='pagina-admin'>
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
                            <input type='text' placeholder='Email'/>
                        </div>

                        <div className='caixa-senha'>
                            <label>Digite sua Senha</label>
                            <input type='text' placeholder='Senha'/>
                        </div>

                        <div id='senha'>
                            Esqueceu a senha?
                        </div>
                    </form>

                    <div id='btn-entrar'>
                        <Link to='/telaCompra'><button>Entrar</button></Link>
                    </div>

                    <div id ='nav-cadastro'>
                        <p>Não possui cadastro? <Link to='/cadastroCliente'><span>Cadastre-se</span></Link></p>
                    </div>
                </main>
            </div>
        </div>
    );
}