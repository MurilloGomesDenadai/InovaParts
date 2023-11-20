import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

import { API_URL } from '../../../api/constants.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cadastrar() {
    const [nome, setNome] = useState ('');
    const [email, setEmail] = useState ('');
    const [cpf, setCpf] = useState ('');
    const [senha, setSenha] = useState ('');
    const [confirmeSenha, setConfirmeSenha] = useState ('');
    const [imagem, setimagem] = useState ('');

    ///cadastrar Admin
    async function cadastrarAdmin() {
        let url = `${API_URL}/adm`;
        await axios.post(url, 
        {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            imagem: imagem,
            
        } )
        
        toast.success("Registro Salvo!")
    }
    
    return (
        <div id='pagina-cadastro-admin'>
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

                    <div id='area-btn'>
                        <div id='btn-cadastrar'>
                            <button onClick={cadastrarAdmin}>Cadastre-se</button>
                        </div>

                        <div id='btn-entrar'>
                            <a href='/loginAdmin'><button>Entrar</button></a>
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