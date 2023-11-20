import './index.scss';
import Header from '../../components/layout/headerProduto';
import Footer from '../../components/layout/rodape/footer.js';

import { useState } from 'react';

export default function Produtopage() {
    const [comentar, setComentar] = useState ('');
    const [comentarios, setComentarios] = useState ([]);

    function alternarComentario(e) {
        setComentar(e.target.value)
    }

    function Comentario() {
        comentarios.push(comentar)
        setComentarios([...comentarios])

        setComentar('')
    }


    return (
        <div id='produtoPage'>
            <Header/>

            <main>
                <section id='comentarioEproduto'>
                    <article id='comentarios'>
                        <div id='scoll'>
                            <div id='listaComentarios'>
                                <ul>
                                    {comentarios.map(item =>
                                    <div className='lista'>
                                        <li>{item}</li>
                                    </div>
                                    )}
                                </ul>
                            </div>
                        </div>


                        <div id='comentar'>
                            <input type='text' id='comentario' placeholder='Comente' value={comentar} onChange={alternarComentario}/>

                            <button onClick={Comentario}><img src='../../assets/icon/comentar.png' alt='iconeEnviar'/></button>
                            </div>
                    </article>

                    <article id='produto'>
                        <div id='informacoesProduto'>
                            <div id='grupoInformacao'>
                                <div id='imagemDescricao'>
                                    <div id='imagemProduto'>
                                        <img src='../../assets/image/produto/turbina-1.png' alt='imagemDoProduto'/>
                                    </div>
                                </div>

                                <div id='grupoCampos'>
                                    <div id='nomeProduto'>
                                        <p className='nomeNegrito'>Nome:</p>
                                        <p className='informacaoProduto'>Turbina Chevette</p>
                                    </div>

                                    <div id='modeloProduto'>
                                        <p className='nomeNegrito'>Modelo:</p>
                                        <p className='informacaoProduto'>AAA10</p>
                                    </div>

                                    <div id='MarcaProduto'>
                                        <p className='nomeNegrito'>Marca:</p>
                                        <p className='informacaoProduto'>Bagio</p>
                                    </div>

                                    <div id='categoriaProduto'>
                                        <p className='nomeNegrito'>Cartegoria:</p>
                                        <p className='informacaoProduto'>Alta-Performance</p>
                                    </div>

                                    <div id='valorProduto'>
                                        <p className='nomeNegrito'>Valor:</p>
                                        <p className='informacaoProduto'>R$520.50</p>
                                    </div>
                                </div>
                            </div>

                            <div id='descricaoProduto'>
                                <p className='nomeNegrito'>Descrição:</p>
                                <p className='informacaoProduto'>Peça de extrema</p>
                            </div>
                        </div>

                        <div id='btnDecisao'>
                            <button>Adicionar ao Carrinho</button>
                            <button>Efutuar Compra</button>
                        </div>
                    </article>
                </section>
            </main>

            <Footer/>
        </div>
    );
};