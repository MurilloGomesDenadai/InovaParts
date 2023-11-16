import './index.scss';
import PerifericosAdmin from '../../../components/layout/controleAdmin';

export default function Perfiladmin() {
    return (
        <div id='perfil-admin'>
            <PerifericosAdmin fundo4 = '#222222' />

            <main>
                <div id='mensagem-identificacao'>
                    <p>seja bem-vindo sr.Admin!</p>
                </div>

                <section id='area-de-alteracao'>
                    <div id='foto-usuario'>
                        <div id='imagem-perfil'>
                            <img src='../../assets/icon/icone_usuario.png'/>
                        </div>

                        <div id='apelido-usuario'>
                            nm_Admin
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
                                    <input type='text' placeholder=''/>
                                </div>

                                <div className='bloco-input'>
                                    <label>Confime senha</label>
                                    <input type='text' placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='btn-alteracao'>
                        <button>Alterar</button>
                    </div>
                </section> 
            </main>
        </div>
    );
}