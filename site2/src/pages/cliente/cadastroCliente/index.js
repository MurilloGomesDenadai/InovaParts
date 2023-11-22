import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

import { API_URL } from '../../../api/constants.js';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cadastro() {
    const [nome, setNome] = useState ('');
    const [email, setEmail] = useState ('');
    const [telefone, setTelefone] = useState ('');
    const [cpf, setCpf] = useState ('');
    const [senha, setSenha] = useState ('');
    const [confirmeSenha, setConfirmeSenha] = useState ('');
    const [imagem, setimagem] = useState ('');


    async function cadastrarCliente() {
        let url = `${API_URL}/usuario`;
        await axios.post(url, 
        {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            senha: senha,
            imagem: imagem,
            
        } )
        
        toast.success("Registro Salvo!")
    }
    

    

    return (
        <div id='pagina-cadastro'>
            <header>

            </header>

            <div id='container'>
                <main>
                    <div id='enunciado'>
                        <p>Cadastro</p>
                    </div>

                    <form id='caixa-texto'>
                    <div className='caixa-senha'>
                        <label>Digite seu Nome</label>
                        <input type='text' placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Email</label>
                        <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Telefone</label>
                        <input type='text' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>

                    <div className='caixa-senha'>
                        <label>CPF</label>
                        <input type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Digite sua Senha</label>
                        <input type='text' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>

                    <div className='caixa-senha'>
                        <label>Confirme sua Senha</label>
                        <input type='text' placeholder='Confirme' value={confirmeSenha} onChange={e => setConfirmeSenha(e.target.value)}/>
                    </div>
                    </form>

                    <form id='checkbox'>
                    <div className='caixa-check'>
                        <input type='checkbox' checked/>
                        <label>Li e concordo com a <span>Politica de Privacidade</span> <span>e Termos e Condições de Uso do Site.</span></label>
                    </div>

                    <div className='caixa-check' checked>
                        <input type='checkbox'/>
                        <label>Aceito receber novidades, ofertas e notícias do autopeças por e-mail.</label>
                    </div>
                    </form>
                    
                    <div id='area-btn'>
                        <div id='btn-cadastrar'>
                            <button onClick={cadastrarCliente}>Cadastre-se</button>
                        </div>

                        <div id='btn-entrar'>
                            <a href='/loginCliente'><button>Entrar</button></a>
                        </div>
                    </div>
                </main>
                <div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}