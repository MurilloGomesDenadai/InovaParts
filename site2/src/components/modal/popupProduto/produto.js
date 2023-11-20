import './produto.scss';

import { buscarId } from '../../../api/produtoEndpoints.js';
import { useEffect, useState } from 'react';


export function Produto({isopenProduto, setOpenProduto}) {
    const [nome, setNome] = useState ()
    const [marca, setMarca] = useState ()
    const [modelo, setModelo] = useState ()
    const [promocao, setPromocao] = useState ()
    const [valor, setValor] = useState ()
    const [id, setId] = useState (0)

    if (isopenProduto) {

        async function Push(id) {
            const resposta = await buscarId(id)
            setNome(resposta.nome)
            setValor(resposta.valor)
            setId(resposta.id)
        
            console.log(resposta)
        }
        

    
        return <dialog open id='popup-produto'>
            <div id='white'>
                <div id='grupamento-principal'>
                    <img className='seta-selecao' src='../assets/icon/seta-esquerda-preta.png' />

                    <div id='imagem-principal'>
                        <img src='../assets/image/fundo_1.jpg'/>
                    </div>

                    <img className='seta-selecao' src='../assets/icon/seta-direita-preta.png' />
                </div>

                <div id='imagens-secundarias'>
                    <div className='opcao-imagem'>
                        <img src='../assets/image/fundo_1.jpg' />
                    </div>

                    <hr/>
                    
                    <div className='opcao-imagem'>
                        <img src='../assets/image/fundo_1.jpg' />
                    </div>

                    <hr/>

                    <div className='opcao-imagem'>
                        <img src='../assets/image/fundo_1.jpg' />
                    </div>

                    <hr/>

                    <div className='opcao-imagem'>
                        <img src='../assets/image/fundo_1.jpg' />
                    </div>
                </div>
            </div>

            <div id='blue'>
                <div id='limitador'>
                    <div id='agrupamento-produto'>
                        <div id='nm-produto'>
                            {nome}, {marca}, {modelo}
                        </div>

                        <div id='valor'>
                            <span>R$ {id}</span>{valor}
                            {promocao}
                        </div>
                    </div>

                    <div id='agrupamento-funcao'>
                        <div id='sobre-produto'>
                            Ver mais sobre o produto
                        </div>
                        
                        <div id='btn-carrinho'>
                            <button onClick={Push}>Adiciona ao carrinho</button>
                            <button>Comprar agora</button>
                        </div>
                    </div>

                    <form method='dialog'>
                        <button onClick={() => setOpenProduto(false)}>
                            <img src='../assets/icon/excluir.png' />
                        </button>
                    </form>
                </div>
            </div>

            
        </dialog> 
    }

    return null;
}