import './produto.scss';

export function Produto({isopenProduto, setOpenProduto}) {

    if (isopenProduto) {
        return <dialog open id='popup-produto'>
            <div id='white'>
                <div id='grupamento-principal'>
                    <img className='seta-selecao' src='../assets/icon/seta-esquerda-preta.png' />

                    <div id='imagem-principal'>
                        <img src='../assets/image/fundo-home-1.png'/>
                    </div>

                    <img className='seta-selecao' src='../assets/icon/seta-direita-preta.png' />
                </div>

                <div id='imagens-secundarias'>
                    <div className='opcao-imagem'></div>
                    <hr/>
                    <div className='opcao-imagem'></div>
                    <hr/>
                    <div className='opcao-imagem'></div>
                    <hr/>
                    <div className='opcao-imagem'></div>
                </div>
            </div>

            <div id='blue'>
                <div>
                    Ver mais sobre o produto
                </div>

                <div>
                    <button>Adiciona ao carrinho</button>
                    <button>Comprar agora</button>
                </div>
                
                <form method='dialog'>
                <button onClick={() => setOpenProduto(false)}>Cancelar</button>
                </form>
            </div>

            
        </dialog> 
    }

    return null;
}