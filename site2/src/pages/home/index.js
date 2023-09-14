import './index.scss';

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
              <div className='setor'>
                <div id='sobre'>
                  <h2>Sobre nós</h2>
                  <p>
                    Somos uma loja online, que fornece as melhores peças e equipamentos para seu veículo do conforto de sua casa ou de qualquer outro lugar com acesso a internet.
                  </p>
                </div>
                <div id='btn'>
                  <button>Entrar</button>
                  <button>Criar conta</button>
                </div>
              </div>
              <div className='setor'>
                <div id='objetivo'>
                  <h2>NOSSO OBJETIVO</h2>
                  <p>
                    Temos como objetivo  trazer peças e equipamentos para o nosso veículo que nos transporta no dia a dia de  maneira confiável e prática.
                  </p>
                </div>
              </div>
              <div className='setor'>
                <div id='encontre'>
                  <h2 >ENCONTRA-SE AQUI</h2>
                  <p>
                    De maneira organizada você consegue achar  o que proucura de forma rápida e eficiente.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <footer>
            <div className='sobre'>
              <p>Empresa</p>
              <p>Sobre</p>
              <p>Nosso objetivo</p>
              <p>Encontar-se aqui</p>
            </div>
            
            <div id='atendimento'>
              <p>Ajuda</p>
              <p>Dúvidas Frequentes</p>
              <p>Como Comprar</p>
            </div>
            
            <div id='politica'>
              <p>Políticas</p>
              <p>Trocas e Devoluções</p>
              <p>Opções de Entrega</p>
              <p>Termos de Uso</p>
              <p>Políticas de Privacidade</p>
            </div>

            <div id='pagamento'>
              <p>Formas de Pagamento</p>
              <img src='./assets/images/credit-card 4.svg'/>
            </div>

            <div id='contato'>
              <p>Contato</p>
              <p>(11) 93124-5378</p>
              <p>(11) 91008-7258</p>
              <p>inovapartes@gmail.com</p>
            </div>
            
            <div id='endereço'>
              <p>
                Autopeças (Nome) Ltda.
                Sede na Rua André Pernet, 2060 - JD.Roschel - CEP 04030-020, São Paulo/SP
                Inscrita no CNPJ sob o nº 43.158.302/0001-03
              </p>
            </div>
          </footer>
        </div>
    );
}