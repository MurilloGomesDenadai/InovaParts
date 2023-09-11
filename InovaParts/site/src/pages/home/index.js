
import './index.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="logo"src='./assets/image/logo.svg'/>
      <h1 className='text1'>Inovapartes</h1>
      </header>
      <div className='s1_conteiner'>
     
        <h2>Sobre nós</h2>
        <p className='text2'>
        Somos uma loja online, que fornece as melhores peças e equipamentos para seu veículo do conforto de sua casa ou de qualquer outro lugar com acesso a internet.
       </p>

       <button>Entrar</button>
       <button>Criar conta</button>
      </div>
      <div className='s2_conteiner'>
        <h2>NOSSO OBJETIVO</h2>
        <p className='text3'>Temos como objetivo  trazer peças e equipamentos para o nosso veículo que nos transporta no dia a dia de  maneira confiável e prática.
        </p>
      </div>
      <div className='s3_conteiner'>
       <h2 >ENCONTRA-SE AQUI</h2>
       <p className='text4'>
       De maneira organizada você consegue achar  o que proucura de forma rápida e eficiente. 
       </p>
      </div>
      <div className='rodape'>
        
        <div className='rodape_1'>
        <h5>Empresa</h5>
        <h5>Sobre</h5>
        <h5>Nosso objetivo</h5>
        <h5>Encontar-se aqui</h5>
       
        </div>
       
        <div className='rodape_2'>
          
          <h5>Ajuda</h5>
          <h5>Dúvidas Frequentes</h5>
          <h5>Como Comprar</h5>
        
       </div>
     
       <div className='rodape_2'>
        <h5>Políticas</h5>
        <h5>Trocas e Devoluções</h5>
        <h5>Opções de Entrega</h5>
        <h5>Termos de Uso</h5>
        <h5>Políticas de Privacidade</h5>
    </div>

      <div className='rodape_2'>
        <h5>Formas de Pagamento</h5>
        <img src='./assets/image/credit-card 4.svg'/>
     </div>

     <div className='rodape_2'>
        <h5>Contato</h5>
        <h5>(11) 93124-5378</h5>
        <h5>(11) 91008-7258</h5>
        <h5>inovapartes@gmail.com</h5>
    </div>
    
    </div>
    <div className='s4_conteiner'>
      <h5>Autopeças (Nome) Ltda.
       Sede na Rua André Pernet, 2060 - JD.Roschel - CEP 04030-020, São Paulo/SP
         Inscrita no CNPJ sob o nº 43.158.302/0001-03
      </h5>
      </div>
       
      
    </div>
  );
}

export default Home;
