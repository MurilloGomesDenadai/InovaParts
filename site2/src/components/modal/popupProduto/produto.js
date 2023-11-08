import './produto.scss';

export function Produto({isopenProduto, setOpenProduto}) {

    if (isopenProduto) {
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
                            <p> 2 Amortecedores Traseiro Fox 2006, 2007, 2008 Nakata</p>
                        </div>

                        <div id='valor'>
                            <span>R$</span>380,00
                        </div>
                    </div>

                    <div id='agrupamento-funcao'>
                        <div id='sobre-produto'>
                            Ver mais sobre o produto
                        </div>
                        
                        <div id='btn-carrinho'>
                            <button>Adiciona ao carrinho</button>
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