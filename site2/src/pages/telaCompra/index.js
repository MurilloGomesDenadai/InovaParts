import './index.scss';



export default function Compra() {
    return (
        <div id='pagina-compra'>
            <header>
              <nav>
                <div id='menu'>
                    <div>
                        <img src='../assets/icon/logo.png'/>
                    </div>

                    <div>
                        <img src='../assets/icon/icone_Usuario.png'/>
                    </div>
                </div>
              </nav>

              <div id='area-pesquisa'>
                <div className='txt-header'>
                    <h1>Inovapartes</h1>
                    <p>
                        Invista no seu veículo do conforto e com a segurança da sua <span>casa!</span>
                    </p>
                </div>

                <div>
                    <input type='text'><img src='../assets/icon/lupa.png'/></input>
                        
                </div>
              </div>
            </header>

            <main
            >

            </main>

            <footer>

            </footer>
        </div>
    );
}