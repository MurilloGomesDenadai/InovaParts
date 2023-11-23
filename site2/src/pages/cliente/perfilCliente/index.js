import './index.scss';
import ConfigCliente from '../../../components/layout/confgCliente';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Perfiladmin() {
    const [imagem, setImagem] = useState ()

    const {idparams} = useParams ();
    const navigate = useNavigate ();

    function selecionarImagem() {
        document.getElementById('imagem').click();
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }

    return (
        <div id='perfil-admin'>
            <ConfigCliente fundo4 = '#222222' />

            <main>
                <div id='mensagem-identificacao'>
                    <p>seja bem-vindo sr.Cliente!</p> 
                </div>

                <section id='area-de-alteracao'>
                    <div id='foto-usuario'>
                        <div id='imagem-perfil' onClick={selecionarImagem}>
                            {!imagem && <img id='imagemVazia' src='../../assets/icon/icone_usuario.png'/>}

                            {imagem && <img id='imagemConteudo' src={mostrarImagem()} />}
                            
                            <input type='file' id='imagem' onChange={e => setImagem(e.target.files[0])}/>
                        </div>

                        <div id='apelido-usuario'>
                            nm_Cliente
                        </div>
                    </div>
                    
                    <hr/>

                    <div id='contato'>
                        <div className='nome-funcao'>
                            <p>Contato</p>
                        </div>

                        <div className='area-interacao'>
                            <div>
                                <div className='bloco-input'>
                                    <label>Nome</label>
                                    <input type='text' placeholder=''/>
                                </div>
                                
                                <div className='bloco-input'>
                                    <label>Email</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>

                            <div>
                                <div className='bloco-input'>
                                    <label>Telefone</label>
                                    <input type='text' placeholder=''/>
                                </div>

                                <div className='bloco-input'>
                                    <label>CPF</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='redefinir-senha'>
                        <div className='nome-funcao'>
                            <p>Redefinir senha</p>
                        </div>

                        <div className='area-senha'>
                            <div id='bloco-senha'>
                                <div className='bloco-input'>
                                    <label>Senha</label>
                                    <input type='password' placeholder=''/>
                                </div>

                                <div className='bloco-input'>
                                    <label>Confime senha</label>
                                    <input type='password' placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id='contato'>
                        <div className='nome-funcao'>
                            <p>Endereço</p>
                        </div>
                    </div>
                    
                    <div id='bloco-cep'>
                                <div className='cep'>
                                    <label>CEP</label>
                                    <input type='text' placeholder=''/>
                                </div>   
                    </div>  

                    <div className='area-interacao'>
                            <div>
                                <div className='bloco-input'>
                                    <label>Logradouro</label>
                                    <input type='text' placeholder=''/>
                                </div>
                                
                                <div className='bloco-input'>
                                    <label>Bairro</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>

                            <div>
                                <div className='bloco-input'>
                                    <label>Cidade</label>
                                    <input type='text' placeholder=''/>
                                </div>

                                <div className='bloco-input'>
                                    <label>Estado</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>
                        </div>

                        <div className='area-interacao'>
                                <div className='bloco-input'>
                                    <label>Complemento</label>
                                    <input type='text' placeholder=''/>
                                </div>

                                <div className='bloco-input'>
                                    <label>N° Casa</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>
                        

                    <div id='btn-alteracao'>
                        <button>Alterar</button>
                        <button className='btn'>Salvar</button>
                    </div>

                </section> 
            </main>
        </div>
    );
}