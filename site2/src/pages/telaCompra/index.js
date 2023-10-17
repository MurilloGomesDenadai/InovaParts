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
                            Invista no seu veículo  
                        </p>
                        <p>
                            do conforto e com a segurança da sua <span>casa!</span>
                        </p>
                    </div>

                    <div id='alinhar-caixa-pesquisa'>
                        <div id='caixa-pesquisa'>
                            <input type='text' placeholder='Pesquisa'/>
                            <img src='../assets/icon/lupa.png'/>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section>
                    
                </section>

            </main>

            <footer>

            </footer>
        </div>
    );
}