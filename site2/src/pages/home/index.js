import './index.scss';
import Footer from '../../components/layout/rodape/footer.js';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
    return (
        <div id='pagina-home'>
          <header>
              <div>
                <img src='../assets/icon/logo.png'/>
              
                <p>Inovapartes</p>
              </div>
          </header>

          <div id='container'>
            <main>
              <div className='fundo-1'>
                <div className='txt'>
                  <h2>Sobre nós</h2>
                  <p>
                    Somos uma loja online que fornece as melhores peças e equipamentos para seu veículo do conforto de sua casa ou de qualquer outro lugar com acesso a internet.
                  </p>
                </div>

                <div id='btn'>
                  <Link to='/loginCliente'><button>Entrar</button></Link>
                  <Link to='/cadastroCliente'><button>Criar conta</button></Link>
                </div>
              </div>

              <div className='fundo-2'>
                <div className='txt'>
                  <h2>NOSSO OBJETIVO</h2>
                  <p>
                    Temos como objetivo trazer peças e equipamentos para o nosso veículo que nos transporta no dia a dia de maneira confiável e prática.
                  </p>
                </div>
              </div>

              <div className='fundo-3'>
                <div className='txt'>
                  <h2 >ENCONTRA-SE AQUI</h2>
                  <p>
                    De maneira organizada você consegue achar o que procura de forma rápida e eficiente.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <section>
            <Footer/>
          </section>
        </div>
    );
}