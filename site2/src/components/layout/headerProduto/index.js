import './index.scss'
import Carrinho from '../../modal/popupCarrinho/popupCarrinho';


import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [open,  setOpen] = useState (false);
    return (
        <div id='paginaHeader'>
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

                <Carrinho isOpen = {open}
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
        

        </div>
    );
};