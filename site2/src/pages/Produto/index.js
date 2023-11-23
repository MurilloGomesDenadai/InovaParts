import './index.scss';
import Header from '../../components/layout/headerProduto';
import Carrossel from '../../components/modal/Carousel/carouselProduto.js';
import Footer from '../../components/layout/rodape/footer.js';
import { BuscarPorId, listarMercadoria } from '../../api/telacompraEndpoints.js';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function Produtopage() {
    const [id, setId] = useState ('');
    const [categoria, setCategoria] = useState ('');
    const [nome, setNome] = useState ('');
    const [marca, setMarca] = useState ('');
    const [modelo, setModelo] = useState ('');
    const [dispnivel, setDisponivel] = useState ('');
    const [promocao, setPromocao] = useState ('');
    const [valor, setValor] = useState ('');
    const [detalhes, setDetalhes] = useState ('');
    const [quantidade, setQuantidade] = useState ('');
    const [produto, setProduto] = useState ('')
    const [comentar, setComentar] = useState ('');
    const [comentarios, setComentarios] = useState ([]);

    const {idp} = useParams ()

    function alternarComentario(e) {
        setComentar(e.target.value)
    }

    function Comentario() {
        comentarios.push(comentar)
        setComentarios([...comentarios])

        setComentar('')
    }

    async function carregarProdutos() {
        const listar = await listarMercadoria();
        setProduto(listar)
    };

    useEffect(() => {
        if (idp) {
            carregarProduto();
        }
    }, [])


    async function carregarProduto() {
        const resposta = await BuscarPorId(idp)
    
        setId(resposta.id)
        setCategoria(resposta.categoria)
        setNome(resposta.nome)
        setMarca(resposta.marca)
        setModelo(resposta.modelo)
        setDisponivel(resposta.disponivel)
        setPromocao (resposta.promocao)
        setValor(resposta.valor)
        setDetalhes(resposta.detalhes)
        setQuantidade(resposta.quantidade)

        console.log(resposta.nome)
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

                                {/* {listarMercadoria.map(item =>  */}
                                    <div id='grupoCampos'>
                                        <div id='nomeProduto'>
                                            <p className='nomeNegrito'>Nome:</p>
                                            <p className='informacaoProduto'>{nome}</p>
                                        </div>

                                        <div id='modeloProduto'>
                                            <p className='nomeNegrito'>Modelo:</p>
                                            <p className='informacaoProduto'>{modelo}</p>
                                        </div>

                                        <div id='MarcaProduto'>
                                            <p className='nomeNegrito'>Marca:</p>
                                            <p className='informacaoProduto'>{marca}</p>
                                        </div>

                                        <div id='categoriaProduto'>
                                            <p className='nomeNegrito'>Categoria:</p>
                                            <p className='informacaoProduto'>{categoria}</p>
                                        </div>

                                        <div id='valorProduto'>
                                            <p className='nomeNegrito'>Valor:</p>
                                            <p className='informacaoProduto'>{valor}</p>
                                        </div>
                                    </div>
                                {/* )} */}
                            </div>

                            <div id='descricaoProduto'>
                                <p className='nomeNegrito'>Descrição:</p>
                                <p className='informacaoProduto'>Peça de extrema</p>
                            </div>
                        </div>

                        <div id='btnDecisao'>
                            <button>Adicionar ao Carrinho</button>
                            <button>Efetuar Compra</button>
                        </div>
                    </article>
                </section>

                <section id='areaCarrossel'>
                    <div id='enunciadoCarrossel'>Destaques</div>
                    <Carrossel/>
                </section>
            </main>

            <Footer/>
        </div>
    );
};