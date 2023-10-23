import './produto.scss';

export function Produto({isopenProduto, setOpenProduto}) {

    if (isopenProduto) {
        return <dialog open id='popup-produto'>
            <div id='white'>

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