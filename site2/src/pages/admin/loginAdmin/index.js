import './index.scss';

import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState } from 'react';

import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';


export default function Admin () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();


    async function enterClick() {

        try {
            const resposta = await axios.post('http://localhost:5011/adm/login', {
                email: email,
                senha: senha
            });
            
            navigate('/configAdmin');
            
        } catch (err) {
            toast.error('Conta Inválida')
        }
    }

    return (
        <div id='pagina-admin'>
            <header>

            </header>

            <div id='container'>
                <main>
                    <div id='enunciado'>
                        Login
                    </div>

                    <form>
                        <div className='caixa-senha'>
                            <label>Digite seu Email</label>
                            <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className='caixa-senha'>
                            <label>Digite sua Senha</label>
                            <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>

                        </div>

                        <div id='senha'>
                            Esqueceu a senha?
                        </div>
                    </form>

                    <div id='btn-entrar'>
                        <button onClick={enterClick}>Entrar</button>
                    </div>
                    
                    <div id ='nav-cadastro'>
                        <p>Não possui cadastro? <Link to='/cadastroCliente'><span>Cadastre-se</span></Link></p>
                    </div>
                </main>
                <div><ToastContainer /></div>
            </div>
        </div>
    );
}
