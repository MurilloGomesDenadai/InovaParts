import './index.scss';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';


export default function PerifericosAdmin(props) {
    const navigate = useNavigate ();

    function sairLocal() {
        storage.remove('admin-logado');
        navigate('/loginAdmin')
    }

    return (
        <div id='perifericosAdmin'>
            <div id='menu'>
                <div  className={props.PerifericosAdmin}>
                    <div id='logo'>
                        <div>
                            <a href="/"><img src='../assets/icon/logo.png'/></a>
                        </div>
                    </div>

                    <div id='menu-nav'>
                        <a href='/controleCliente' className='menu-div' style={{background: props.fundo1}}>
                            <div><img src='../../assets/icon/usuario.png'/></div>

                            <div className='nav-nome'> 
                                <p>Clientes</p>
                            </div>
                        </a>

                        <a href='/controleProduto' className='menu-div'  style={{background: props.fundo2}}>
                            <div><img src='../../assets/icon/produto.png'/></div>

                            <div className='nav-nome'>
                                <p>Produtos</p>
                            </div>
                        </a>

                        <a href='/#' className='menu-div' style={{background: props.fundo3}}>
                            <div><img src='../../assets/icon/icone_Carrinho.png'/> </div>

                            <div className='nav-nome'>
                                <p>Analise</p>
                            </div>
                        </a>

                        <a href="/perfilAdmin" className='menu-div' style={{background: props.fundo4}}>
                            <div><img src='../../assets/icon/editar.png'/> </div>
                    
                            <div className='nav-nome'>
                                <p>Editar Perfil</p>
                            </div>
                        </a>
                    </div>
                </div>

                <a onClick={sairLocal} href='/loginCliente'id='saida'>
                    <img src='../../assets/icon/sair.png'/>
                    <p>Sair</p>
                </a>
            </div>
        </div>
    );
}