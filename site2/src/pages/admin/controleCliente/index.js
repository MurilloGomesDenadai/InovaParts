import './index.scss';

import { listarCliente, listarporNome } from '../../../api/clienteEndpoints.js';

import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Controle() {
    const [listarClientes, setListarClientes] = useState ([])
    const [listarporNomes, setListarporNomes] = useState ([])

    //Listar todos os clientes
    async function carregarlistaclientes() {
        const listar = await listarCliente();
    
        setListarClientes(listar)
    };

    useEffect(() => {
        carregarlistaclientes()
    }, [])

    //Listar clientes por nome
    async function Filtrar() {

        try {
            if (listarporNomes != 0) {
                const filtro = await listarporNome(listarporNomes);
                setListarClientes(filtro)
            } else {
                const listar = await listarCliente();
                setListarClientes(listar)
            }
            
        } catch (error) {
            toast.error('Nome não encontrado!')
        }
    };

    const handleKeyDown = event => {
        console.log(event.key);
        
        if (event.key == 'Enter') {
            
        }
    }

    return (
        <div id='page-controle'>
            <div id='menu'>
                <div id='logo'>
                    <div>
                        <img src='../assets/icon/logo.png'/>
                    </div>
                </div>

                <div id='menu-nav'>
                    <div className='menu-div'  style={{background: '#222222'}}>
                        <div><img src='../../assets/icon/usuario.png'/></div>
                        <div className='nav-nome'>
                            <p>Cliente</p>
                        </div>
                    </div>

                    <a href='/configAdmin' className='menu-div'>
                        <div><img src='../../assets/icon/produto.png'/></div>

                        <div className='nav-nome'>
                            <p>Produto</p>
                        </div>
                    </a>

                    <div className='menu-div'>
                        <div><img src='../../assets/icon/icone_Carrinho.png'/> </div>

                        <div className='nav-nome'>
                            <p>Carrinho</p>
                        </div>
                    </div>

                    <div className='menu-div'>
                        <div><img src='../../assets/icon/editar.png'/> </div>

                        <div className='nav-nome'>
                            <p>Editar Perfil</p>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <header>
                    <p>seja bem-vindo sr.Cliente!</p>
                </header>

                <div id='consulta'>
                    <div id='conjunto'>
                        <div id='enunciado-consulta'>
                            <h2>Lista de produtos</h2>
                        </div>

                        <div className='caixa-consulta'>
                            <div id='area-pesquisa'>
                                <label>Nome do produto</label>
                                <input type='text' value={listarporNomes} onChange={e => setListarporNomes(e.target.value)}/>
                            </div>
                            
                            <div id='img-consulta'>
                                <button onKeyDown={handleKeyDown} onClick={Filtrar}><img src='../../assets/icon/lupa.png'/></button>
                            </div>
                        </div>
                    </div>

                    <div id='scroll-vertical'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>CEP</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>

                            <tbody>
                                {listarClientes.map(item => 
                                <tr key={item.Id}>
                                    <td>{item.Cliente}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.CPF}</td>
                                    <td>{item.Telefone}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div><ToastContainer /></div>
            </main>
        </div>
    )
}