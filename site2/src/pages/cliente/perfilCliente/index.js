// // import './index.scss';
// // import ConfigCliente from '../../../components/layout/confgCliente';



// // import { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';

// // export default function PerfilCliente() {
// //     const [imagem, setImagem] = useState ()

// //     const {idparams} = useParams ();
// //     const navigate = useNavigate ();

// //     const [email, setEmail] = useState ('');
// //     const [nome, setNome] = useState('');
// //     const [telefone, setTelefone] = useState('');
// //     const [cpf, setCpf] = useState('');
// //     const [senha, setSenha] = useState('');
// //     const [confirmarsenha, setConfirmarsenha] = useState('');
// //     const [cep, setCep] = useState('');
// //     const [logradouro, setLogradouro] = useState('');
// //     const [bairro, setBairro] = useState('');
// //     const [cidade, setCidade] = useState('');
// //     const [estado, setEstado] = useState('');
// //     const [complemento, setComplemento] = useState('');
// //     const [ncasa, setNcasa] = useState('');
// //     const [cdseguranca, setCdseguranca] = useState('');
// //     const [validade, setValidade] = useState('');
//     const [email, setEmail] = useState ('');
//     const [nome, setNome] = useState('');
//     const [telefone, setTelefone] = useState('');
//     const [cpf, setCpf] = useState('');
//     const [senha, setSenha] = useState('');
//     const [confirmarsenha, setConfirmarsenha] = useState('');
//     const [cep, setCep] = useState('');
//     const [logradouro, setLogradouro] = useState('');
//     const [bairro, setBairro] = useState('');
//     const [cidade, setCidade] = useState('');
//     const [estado, setEstado] = useState('');
//     const [complemento, setComplemento] = useState('');
//     const [ncasa, setNcasa] = useState('');
//     const [cdseguranca, setCdseguranca] = useState('');
//     const [validade, setValidade] = useState('');
//     const [titular, setTitular ] = useState('');
//     const [ncartao,setNcartao] = useState('');



// // //idade,Estado,Complemento, NºCasa,Titular, NºdoCartão,Cód.deSegurança,Validade
// //     async function Salvar() { 
// //         try {
// //           if (id === 0) {
// //             const novoRegistro = await cadastrarCliente(Nome,Telefone, Email, CPF, Senha, ConfirmarSenha, CEP, Logradouro, Bairro, Cidade,Estado,Complemento, NºCasa,Titular, NºdoCartão,Cód.deSegurança,Validade)
// //             // const imagemCapa = await adicionarImagem(novoProduto.id, imagem)   
// //             setId(novoRegistro.perfil);
// //             toast.success("Registro Salvo!")  
// //           }else {
// //             await alterarInfoCliente(Nome,Telefone, Email, CPF, Senha,ConfirmarSenha,CEP, Logradouro, Bairro, Cidade,Estado,Complemento, NºCasa,Titular, NºdoCartão,Cód.deSegurança,Validade)
// //             toast.success('Informação alterado!')
// //           }
// //         } catch (error) {
// //           toast.error(id)          
// //         }    
    

// //     }
// //     function selecionarImagem() {
// //         document.getElementById('imagem').click();
// //     }

// //     function mostrarImagem() {
// //         return URL.createObjectURL(imagem);
// //     }

// //     return (
// //         <div id='perfil-Cliente'>
// //             <ConfigCliente fundo4 = '#222222' />

// //             <main>
// //                 <div id='mensagem-identificacao'>
// //                     <p>seja bem-vindo sr.Cliente!</p> 
// //                 </div>

// //                 <section id='area-de-alteracao'>
// //                     <div id='foto-usuario'>
// //                         <div id='imagem-perfil' onClick={selecionarImagem}>
// //                             {!imagem && <img id='imagemVazia' src='../../assets/icon/icone_usuario.png'/>}

// //                             {imagem && <img id='imagemConteudo' src={mostrarImagem()} />}
                            
// //                             <input type='file' id='imagem' onChange={e => setImagem(e.target.files[0])}/>
// //                         </div>

// //                         <div id='apelido-usuario'>
// //                             nm_Cliente
// //                         </div>
// //                     </div>
                    
// //                     <hr/>

// //                     <div id='contato'>
// //                         <div className='nome-funcao'>
// //                             <p>Contato</p>
// //                         </div>

// //                         <div className='area-interacao'>
// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Nome</label>
// //                                     <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
// //                                 </div>
                                
// //                                 <div className='bloco-input'>
// //                                     <label>Email</label>
// //                                     <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Telefone</label>
// //                                     <input type='text' value={telefone} onChange={e => seTelefone(e.target.value)}/>
// //                                 </div>
//                             <div>
//                                 <div className='bloco-input'>
//                                     <label>Telefone</label>
//                                     <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)}/>
//                                 </div>

// //                                 <div className='bloco-input'>
// //                                     <label>CPF</label>
// //                                     <input type='text' value={cpf} onChange={e => setCpf(e.target.value)}/>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div id='redefinir-senha'>
// //                         <div className='nome-funcao'>
// //                             <p>Redefinir senha</p>
// //                         </div>

// //                         <div className='area-senha'>
// //                             <div id='bloco-senha'>
// //                                 <div className='bloco-input'>
// //                                     <label>Senha</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>

// //                                 <div className='bloco-input'>
// //                                     <label>Confime senha</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
//                         <div className='area-senha'>
//                             <div id='bloco-senha'>
//                                 <div className='bloco-input'>
//                                     <label>Senha</label>
//                                     <input type='text' value={senha} onChange={e => setSenha(e.target.value)}/>
//                                 </div>

//                                 <div className='bloco-input'>
//                                     <label>Confime senha</label>
//                                     <input type='text' value={confirmarsenha} onChange={e => setConfirmarsenha(e.target.value)}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


// //                     <div id='contato'>
// //                         <div className='nome-funcao'>
// //                             <p>Endereço</p>
// //                         </div>
// //                     </div>
                    
// //                     <div id='bloco-cep'>
// //                                 <div className='cep'>
// //                                     <label>CEP</label>
// //                                     <input type='text' value={cep} onChange={e => setCep(e.target.value)}/>
// //                                 </div>   
// //                     </div>  

// <<<<<<< HEAD
// //                     <div className='area-interacao'>
// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Logradouro</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
                                
// //                                 <div className='bloco-input'>
// //                                     <label>Bairro</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Cidade</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>

// //                                 <div className='bloco-input'>
// //                                     <label>Estado</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// //                             </div>
// //                             <div>
//                     <div className='area-interacao'>
//                             <div>
//                                 <div className='bloco-input'>
//                                     <label>Logradouro</label>
//                                     <input type='text' value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
//                                 </div>
                                
//                                 <div className='bloco-input'>
//                                     <label>Bairro</label>
//                                     <input type='text'value={bairro} onChange={e => setBairro(e.target.value)}/>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className='bloco-input'>
//                                     <label>Cidade</label>
//                                     <input type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
//                                 </div>

//                                 <div className='bloco-input'>
//                                     <label>Estado</label>
//                                     <input type='text' value={estado} onChange={e => setEstado(e.target.value)}/>
//                                 </div>
//                             </div>
//                             <div>
// >>>>>>> 7cb9690fe1acc9d2800e94dd80dd64b22dae2ae9
                                
// //                             </div>
// //                         </div>

// <<<<<<< HEAD
// //                         <div className='area-interacao_1'>
// //                                 <div className='bloco-input'>
// //                                     <label>Complemento</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// =======
//                         <div className='area-interacao_1'>
//                                 <div className='bloco-input'>
//                                     <label>Complemento</label>
//                                     <input type='text' value={complemento} onChange={e => setComplemento(e.target.value)}/>
//                                 </div>
// >>>>>>> 7cb9690fe1acc9d2800e94dd80dd64b22dae2ae9

// //                                 <div className='bloco-input'>
// //                                     <label>N° Casa</label>
// //                                     <input type='text' value={ncasa} onChange={e => setNcasa(e.target.value)}/>
// //                                 </div>
// //                             </div>

// //                             <div id='contato'>
// //                         <div className='nome-funcao'>
// //                             <p>Cartão</p>
// //                         </div>
// //                     </div>



// <<<<<<< HEAD
// //                     <div className='area-interacao'>
// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Titular</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
                                
// //                                 <div className='bloco-input'>
// //                                     <label>Cód. de Segurança (CVV)</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <div className='bloco-input'>
// //                                     <label>Nº do Cartão</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>

// //                                 <div className='bloco-input'>
// //                                     <label>Validade</label>
// //                                     <input type='text' placeholder=''/>
// //                                 </div>
// //                             </div>
// //                         </div>
// =======
//                     <div className='area-interacao'>
//                             <div>
//                                 <div className='bloco-input'>
//                                     <label>Titular</label>
//                                     <input type='text' value={titular} onChange={e => setTitular(e.target.value)}/>
//                                 </div>
                                
//                                 <div className='bloco-input'>
//                                     <label>Cód. de Segurança (CVV)</label>
//                                     <input type='text' value={cdseguranca} onChange={e => setCdseguranca(e.target.value)}/>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className='bloco-input'>
//                                     <label>Nº do Cartão</label>
//                                     <input type='text' value={ncartao} onChange={e => setNcartao(e.target.value)}/>
//                                 </div>

//                                 <div className='bloco-input'>
//                                     <label>Validade</label>
//                                     <input type='text' value={validade} onChange={e => setValidade(e.target.value)}/>
//                                 </div>
//                             </div>
//                         </div>
// >>>>>>> 7cb9690fe1acc9d2800e94dd80dd64b22dae2ae9
                    

// //                     <div id='btn-alteracao'>
// //                         <button>Alterar</button>
// //                         <button className='btn'>Salvar</button>
// //                     </div>

// //                 </section> 
// //             </main>
// //         </div>
// //     );
// // }