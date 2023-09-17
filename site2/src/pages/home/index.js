import './index.scss';
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
                    Somos uma loja online, que fornece as melhores peças e equipamentos para seu veículo do conforto de sua casa ou de qualquer outro lugar com acesso a internet.
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
                    Temos como objetivo  trazer peças e equipamentos para o nosso veículo que nos transporta no dia a dia de  maneira confiável e prática.
                  </p>
                </div>
              </div>

              <div className='fundo-3'>
                <div className='txt'>
                  <h2 >ENCONTRA-SE AQUI</h2>
                  <p>
                    De maneira organizada você consegue achar  o que proucura de forma rápida e eficiente.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <footer>
            <div>
              <div id='sobre'>
                <h4>Empresa</h4>
                <p>Sobre</p>
                <p>Nosso objetivo</p>
                <p>Encontar-se aqui</p>
              </div>
              
              <div id='atendimento'>
                <h4>Ajuda</h4>
                <p>Dúvidas Frequentes</p>
                <p>Como Comprar</p>
              </div>
              
              <div id='politica'>
                <h4>Políticas</h4>
                <p>Trocas e Devoluções</p>
                <p>Opções de Entrega</p>
                <p>Termos de Uso</p>
                <p>Políticas de Privacidade</p>
              </div>
              <div id='pagamento'>
                <h4>Formas de Pagamento</h4>
                <img src='../assets/icon/credit-card.png'/>
              </div>
              <div id='contato'>
                <h4>Contato</h4>
                <p>... (11) 93124-5378</p>
                <p>... (11) 91008-7258</p>
                <p>inovapartes@gmail.com</p>
              </div>
            </div>
            
            <div id='endereco'>
              <div>
                <p>Autopeças (Nome) Ltda.</p>
                
                <p>
                  Sede na Rua André Pernet, 2060 - JD.Roschel - CEP 04030-020, São Paulo/SP
                  Inscrita no CNPJ sob o nº 43.158.302/0001-03
                </p>
              </div>
            </div>
          </footer>
        </div>
    );
}