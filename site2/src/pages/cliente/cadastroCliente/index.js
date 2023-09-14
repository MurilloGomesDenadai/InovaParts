import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cadastro() {
    return (
        <div id='pagina-cadastro'>
            <header>

            </header>

            <div id='container'>
                <main>
                    <div id='enunciado'>
                        <p>Cadastro</p>
                    </div>

                    <form id='caixa-texto'>
                    <div className='caixa-senha'>
                        <label>Digite seu Nome</label>
                        <input type='text' placeholder='Nome Completo'/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Email</label>
                        <input type='text' placeholder='Email'/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Telefone</label>
                        <input type='text' placeholder='Telefone'/>
                    </div>

                    <div className='caixa-senha'>
                        <label>CPF</label>
                        <input type='text' placeholder='CPF'/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Digite sua Senha</label>
                        <input type='text' placeholder='Senha'/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Confirme sua Senha</label>
                        <input type='text' placeholder='Confirme'/>
                    </div>
                    </form>

                    <form id='checkbox'>
                    <div className='caixa-check'>
                        <input type='checkbox'/>
                        <label>Li e concordo com a <span>Politica de Privacidade</span> <span>e Termos e Condições de Uso do Site.</span></label>
                    </div>

                    <div className='caixa-check'>
                        <input type='checkbox'/>
                        <label>Aceito receber novidades, ofertas e notícias do auopeças por e-mail.</label>
                    </div>
                    </form>
                    
                    <div id='area-btn'>
                        <div id='btn-cadastrar'>
                            <Link to='/telaCompra'><button>Cadastre-se</button></Link>
                        </div>

                        <div id='btn-entrar'>
                            <Link to='/'><button>Entrar</button></Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}