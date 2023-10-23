import './index.scss';
import Modal from '../../components/modal/popupCarrinho/popupCarrinho.js';
import Footer from '../../components/rodape/footer.js';
import Manutencao from '../../components/modal/popupDpto/manutencao/manutencao.js';

import { useState } from 'react';
import {Link} from 'react-router-dom';




export default function Compra() {
    const [open,  setOpen] = useState (false);
    const [openManutencao,  setOpenManutencao] = useState (false);
    
    

    const [openVermais, setOpenVermais] = useState (false)
    const [openVermais2, setOpenVermais2] = useState (false)

    const vermaisStyle = {
        display: 'none'
    }


    return (
        <div id='pagina-compra'>
            <header>
                <nav>
                    <div id='menu'>
                        <div id='apresentacao'>
                            <Link to='/'><img src='../assets/icon/logo.png'/></Link>
                            <p>InovaPartes</p>
                        </div>

                        <div id='config-car'>
                            <button onClick={() => setOpen(true)}>
                                <img src='../assets/icon/icon_Carrinho.png'/>
                            </button>

                            <img src='../assets/icon/icone_Usuario.png'/>
                        </div>
                        
                    </div>
                </nav>

                <Modal isOpen = {open}
                        setOpen = {setOpen}/>

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
                <section id='departamento'>
                    <div id='faixa-departamento'> 
                        <p>
                            Departamento
                        </p>
                    </div>
                    <div id='card-agrupamento'>
                        <div className='card-selecao'>Performace</div>

                        <div className='card-selecao'>Turbinas</div >

                        <div className='card-selecao'>Kit Turbo</div>

                        <div className='card-selecao'>fueltech</div>

                        <div onMouseEnter={() => setOpenManutencao(true)} className='card-manutencao'>Manutenção Preventiva</div>

                        {/* <div className='manucard' onMouseOut={() => setOpenManutencao(false)}>
                            <div onMouseEnter={() => setOpenManutencao(true)} className='card-manutencao'>Manutenção Preventiva</div>
                            <div>
                                <Manutencao isopenManutencao = {openManutencao}
                            />
                            </div>
                        </div> */}
                    </div>
                </section>
            
                <section id='area-produto'>
                    <aside>
                        <h2>Ordenar</h2>
                        <div id='ordenamento'>
                            <div>
                                <div className='circulo-opcao'>
                                <img src='../assets/icon/icon-todos.svg'/>
                                </div>

                                <div className='nome-opcao'>Todos</div>
                            </div>

                            <div>
                                <div className='circulo-opcao'>
                                <img id='icon-menor-preco' src='../assets/icon/icon-menor-preco.svg'/>
                                </div>

                                <div className='nome-opcao'>Menor preço</div>
                            </div>

                            <div>
                                <div className='circulo-opcao'>
                                    <img src='../assets/icon/icon-maior-preco.svg'/>
                                </div>

                                <div className='nome-opcao'>Maior preço</div>
                            </div>
                        </div>

                        <div className='linha-aside'><hr/></div>

                        <div id='categoria'>
                            <h2>Categoria</h2> 
                            <div className='selecao'>
                                <div className='topico-selecao'>
                                    <p>Amortecedores</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Frios</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Direção</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Motor</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Embreagem</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Suspensão</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>
                            </div>
                            <div className='linha-aside'><hr/></div>

                            <h2>Marcas</h2> 
                            <div className='selecao'>
                                <div className='topico-selecao'>
                                    <p>Amortecedores</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Frios</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Direção</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Motor</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Embreagem</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Suspensão</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>
                            </div>
                            <div className='linha-aside'><hr/></div>

                            <h2>Fornecedores</h2> 
                            <div className='selecao'>
                                <div className='topico-selecao'>
                                    <p>Amortecedores</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Frios</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>
                                
                                <div className='topico-selecao'>
                                    <p>Direção</p>
                                    <img src='../assetss/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Motor</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Embreagem</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Suspensão</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>
                            </div>
                            <div className='linha-aside'><hr/></div>

                            <h2>Tipo de carro</h2> 
                            <div className='selecao'>
                                <div className='topico-selecao'>
                                    <p>Carro</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Moto</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>

                                <div className='topico-selecao'>
                                    <p>Caminhão</p>
                                    <img src='../assets/icon/seta-baixo.png'/>
                                </div>
                                
                            </div>
                        </div>
                    </aside>

                    <article>
                        <div className='lista-produtos'>
                            <div className='nome-area'>
                                Amortecedores
                            </div>

                            <div className='produtos-agrupamento'>
                                <div className='produto'>1</div>
                                <div className='produto'>2</div>
                                <div className='produto'>3</div>
                                <div className='produto'>4</div>
                                <div className='produto'>5</div>
                                <div className='produto'>6</div>
                                <div className='produto'>7</div>
                                <div className='produto'>8</div>
                                <div className='produto'>9</div>
                                <div className='produto'>10</div>
                                <div className='produto'>11</div>
                                <div className='produto'>12</div>
                                <span style={openVermais ? null : vermaisStyle}>
                                    <div className='produto'>13</div>
                                    <div className='produto'>14</div>
                                    <div className='produto'>15</div>
                                    <div className='produto'>16</div>
                                    <div className='produto'>17</div>
                                    <div className='produto'>18</div>
                                    <div className='produto'>19</div>
                                    <div className='produto'>20</div>
                                </span>
                            </div>

                            <div className='ver-mais'>
                                <button onClick={() => setOpenVermais(!openVermais)}>{openVermais ? 'Ver menos' : 'Ver mais'}</button>
                            </div>

                            <div className='linha-produto'><hr/></div>
                        
                        </div>

                        <div className='lista-produto'>
                            <div className='nome-area'>
                                Amortecedores
                            </div>

                            <div className='produtos-agrupamento'>
                                <div className='produto'>1</div>
                                <div className='produto'>2</div>
                                <div className='produto'>3</div>
                                <div className='produto'>4</div>
                                <div className='produto'>5</div>
                                <div className='produto'>6</div>
                                <div className='produto'>7</div>
                                <div className='produto'>8</div>
                                <div className='produto'>9</div>
                                <div className='produto'>10</div>
                                <div className='produto'>11</div>
                                <div className='produto'>12</div>
                                <span style={openVermais2 ? null : vermaisStyle}>
                                    <div className='produto'>13</div>
                                    <div className='produto'>14</div>
                                    <div className='produto'>15</div>
                                    <div className='produto'>16</div>
                                    <div className='produto'>17</div>
                                    <div className='produto'>18</div>
                                    <div className='produto'>19</div>
                                    <div className='produto'>20</div>
                                </span>
                            </div>

                            <div className='ver-mais'>
                                <button onClick={() => setOpenVermais2(!openVermais2)}>{openVermais2 ? 'Ver menos' : 'Ver mais'}</button>
                            </div>

                            <div className='linha-produto'><hr/></div>
                        </div>
                    </article>
                </section>
            

            </main>

            <div>
                <Footer/>
            </div>
        </div>
    );
}