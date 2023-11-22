import './index.scss';


export default function ConfigCliente(props) {
    return (
        <div id='cliente'>
            <div id='menu'>
                <div  className={props.ConfigCliente}>
                    <div id='logo'>
                        <div>
                            <a href="/">
                                <img src='../../assets/icon/icone_usuario.png'/>
                            </a>
                        </div>
                    </div>

                    <div id='menu-nav'>
                        <a href='/controleCliente' className='menu-div' style={{background: props.fundo1}}>
                            <div>
                                <img src='../../assets/icon/usuario.png'/>
                                </div>

                            <div className='nav-nome'> 
                                <p>Clientes</p>
                            </div>
                        </a>

                        <a href='/controleProduto' className='menu-div'  style={{background: props.fundo2}}>
                            <div>
                                <img src='../../assets/icon/produto.png'/></div>

                            <div className='nav-nome'>
                                <p>Produtos</p>
                            </div>
                        </a>
                    </div>
                </div>

                <a href='/loginCliente'id='saida'>
                    <img src='../../assets/icon/sair.png'/>
                    <p>Sair</p>
                </a>
            </div>
        </div>
    );
}