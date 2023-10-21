import './popupCarrinho.scss'

import { Link } from 'react-router-dom';

export default function Carrinho({isOpen, setOpen}) {
    

    if (isOpen) {
        return <dialog open>
                    <div id='popup-carrinho'>
                        <div id='container'>
                            <div id='caixa-subtotal'>
                                <p>Subtotal: R$ 3.573,00</p>
                            </div>

                            <div className='card'>
                                <div id='img-produto'>
                                    <img src='../assets/image/fundo-home-1.png'/>
                                </div>

                                <div id='nome-produto'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. 
                                    </p>
                                </div>

                                <div id='valores'>
                                    <div className='qtd'>
                                        <label>QTD:</label>
                                        {/* <input type='text'/> */}
                                        <p>2</p>
                                    </div>

                                    <div className='total'>
                                        <p><span>R$</span> 1.500,00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='btn-pedido'>
                        <button>Remover</button>
                        <button>Comprar</button>
                    </div>

                    <hr/>

                    <form method='dialog'>
                        <button onClick={() => setOpen(false)}>Fechar</button>
                        <div id='btn-geren-carrinho'>
                            <Link to='/'><button>Gerenciar Carrinho</button></Link>
                        </div>
                    </form>
                </dialog>
            
        

    }

    return null
}