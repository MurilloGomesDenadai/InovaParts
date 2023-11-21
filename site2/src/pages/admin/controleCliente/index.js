import './index.scss';
import PerifericosAdmin from '../../../components/layout/controleAdmin';
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


    //Comando por tecla listar Clientes
    async function enterClick(e) {
        if (e.key === 'Enter'){
            Filtrar()
        }
    }

    return (
        <div id='page-controle'>
            <PerifericosAdmin fundo1 = '#222222'/>

            <main>
                <header>
                    <p>seja bem-vindo sr.Admin!</p>
                </header>

                <div id='consulta'>
                    <div id='conjunto'>
                        <div id='enunciado-consulta'>
                            <h2>Listar Clientes</h2>
                        </div>

                        <div className='caixa-consulta'>
                            <div id='area-pesquisa'>
                                <label>Nome do Cliente</label>
                                <input type='text' onKeyDown={enterClick} value={listarporNomes} onChange={e => setListarporNomes(e.target.value)}/>
                            </div>
                            
                            <div id='img-consulta'>
                                <button  onClick={Filtrar}><img src='../../assets/icon/lupa.png'/></button>
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
                                <tr key={item.id}>
                                    <td>{item.cliente}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.email}</td>
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