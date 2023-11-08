import './index.scss';

import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Controle() {
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
                                <input type='text' />
                            </div>

                            <div id='img-consulta'>
                                <button><img src='../../assets/icon/lupa.png'/></button>
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
                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>

                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>


                                <tr>
                                    <td>Luiz Henrique Dias Ananias</td>
                                    <td>luiz@gmail.com</td>
                                    <td>84548-4545</td>
                                    <td>(11) 12456-1245</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}