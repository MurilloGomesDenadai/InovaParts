import './index.scss';
import Modal from '../../components/modal/modal.js';
import Footer from '../../components/rodape/footer.js';

import { useState } from 'react';
import {Link} from 'react-router-dom';




export default function Compra() {
    const [open,  setOpen] = useState (false);

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

                        <div className='card-selecao'>Manutenção Preventiva</div>
                    </div>
                </section>
            
                <section id='area-produto'>
                    <div id='filtro'>

                    </div>

                    <article ClassName='lista-produtos'>
                        <div Classname='nome-area'>
                            Amortecedores
                        </div>

                        <div id='produtos-agrupamento-1'>
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
                        </div>

                        <div className='Ver-mais'>
                            <button>Ver mais</button>
                        </div>

                        <hr/>
                        
                    </article>

                    <article Classname='lista-produto'>
                    <div ClassName='nome-area'>
                            Amortecedores
                        </div>

                        <div id='produtos-agrupamento-2'>
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
                        </div>

                        <div className='Ver-mais'>
                            <button>Ver mais</button>
                        </div>

                        <hr/>
                    </article>
                </section>
            

            </main>

            <div>
                <Footer/>
            </div>
        </div>
    );
}