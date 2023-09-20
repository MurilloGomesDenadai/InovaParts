import './index.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Config() {
  const [listarTodos, setListarTodos] = useState ([])
  const [nome, setNome] = useState ('')
  const [produto, setProduto] = useState ('')
  const [valor, setValor] = useState ('')
  const [quantidade, setQuantidade] = useState ('')
  const [disponivel, setDisponivel] = useState (true)
  const [modelo, setModelo] = useState ('')
  const [detalhes, setDetalhes] = useState ('')
  const [promocao, setPromocao] = useState ('')
  const [categoria, setCategoria] = useState ('')
  const [marca, setMarca] = useState ('')


  async function Adicionar() {

    let url = 'http://localhost:5000/produto';
    await axios.post(url, {
      categoria: categoria,
      nome: produto,
      marca: marca,
      modelo: modelo,
      disponivel: disponivel,
      promocao: promocao,
      valor: valor,
      detalhes: detalhes,
      quantidade: quantidade
    })

    toast.success("Registro Salvo!")
  }

  async function Listar() {
    
    let url = 'http://localhost:5000/produto';
    let resp = await axios.get(url)

    setListarTodos(resp.data)
  }

  async function Apagar(id) {
    let res = await axios.delete(`http://localhost:5000/produto/ ${id}`)
    
    toast.success("Registro Deletado!")
    
    let url = 'http://localhost:5000/produto';
    let resp = await axios.get(url)

    setListarTodos(resp.data)
  }

  async function Alterar(item) {
      setCategoria(item.categoria)
      setNome(item.nome)
      setMarca(item.marca)
      setModelo(item.modelo)
      setDisponivel(item.disponivel)
      setPromocao(item.promocao)
      setValor(item.valor)
      setDetalhes(item.detalhes)
      setQuantidade(item.quantidade)
  }


  return (
    <div className="pagina-config">
      
      <div id='menu'>
        <div id='logo'>
          <div>
            <img src='../assets/icon/logo.png'/>
          </div>
        </div>

        <div id='menu-nav'>
          <div className='menu-div'>
            <div><img src='../../assets/icon/usuario.png'/></div>
            <div className='nav-nome'>
              <p>Cliente</p>
            </div>
          </div>

          <Link to='/'>
            <div className='menu-div'  style={{background: '#222222'}}>
                <div><img src='../../assets/icon/produto.png'/></div>
                <div className='nav-nome'>
                <p>Produto</p>
              </div>
            </div> 
          </Link>

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

      <div id='container'>
        <header>
          <p>seja bem-vindo sr.Admin!</p>
        </header>

        <div id='enunciado'>
            <h1>Controle de Produto</h1>
        </div>

        <main>
          <div id='inserir'>
            <div id='enunciado-inserir'>
              <h2>Produto</h2>
            </div>

            <div id='area-cadastro'>
              <form>
                <div>
                  <div className='caixa-inserir'>
                    <label>
                      Produto
                    </label>
                    <input type='text' value={produto} onChange={e => setProduto(e.target.value)}/>
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Valor
                    </label>
                    <input type='text' value={valor} onChange={e => setValor(e.target.value)}/>
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Categoria
                    </label>
                    <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)}/>
                  </div>

                  <div id='group'>
                    <div className='caixa-inserir'>
                      <label>
                        QTD
                      </label>
                      <input type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                    </div>

                    <div className='caixa-inserir'>
                      <label>
                        Disponivel
                      </label>
                      <input type='checkbox' value={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                    </div>
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Modelo
                    </label>
                    <input type='text' value={modelo} onChange={e => setModelo(e.target.value)}/>
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Marca
                    </label>
                    <input type='text' value={marca} onChange={e => setMarca(e.target.value)}/>
                  </div>
                </div>

                <div className='caixa-descricao'>
                    <label>
                      Promoção
                    </label>
                    <input type='text' value={promocao} onChange={e => setPromocao(e.target.value)}/>
                </div>

                <div className='caixa-descricao'>
                  <label>
                    Detalhes
                  </label>
                  <input type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)}/>
                </div>
              </form>

              <div id='finalizar'>
                <div>
                  <div id='area-img'>
                    <div id='img-g'>
                      <p>imagem</p>
                    </div>

                    <div id='img-p'>
                      <div>
                        <img src=''/>
                      </div>

                      <div>
                        <img src=''/>
                      </div>
              
                      <div>
                        <img src=''/>
                      </div>
                    </div>
                  </div>

                  <div id='btn-duplo'>
                    <div className='btn-img'>
                      <button>Adicionar Imagem</button>
                    </div>
                    <div className='btn-img'>
                      <button>Remover imagem</button>
                    </div>
                  </div>
                </div>

                <div id='btn-salvar'>
                  <button onClick={Adicionar}>Salvar</button>
                </div>
              </div>
            </div>

            
          </div>

          <div id='consulta'>
            <div id='conjunto'>
              <div id='enunciado-consulta'>
                <h2>Lista de produtos</h2>
              </div>

              <div className='caixa-consulta'>
                  <div>
                    <label>Nome do produto</label>
                    <input type='text' onChange={e => setNome(e.target.value)}value={nome}/>
                  </div>

                  <div id='img-consulta'>
                    <button onClick={Listar}><img src='../../assets/icon/lupa.png'/></button>
                  </div>
                </div>
            </div>

              <div id='scroll-horizontal'>
                <table>
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Peça</th>
                      <th>Marca</th>
                      <th>Disponível</th>
                      <th>QTD</th>
                      <th>Promoção</th>
                      <th>Valor</th>
                      <th>Promoção</th>
                    </tr>
                  </thead>
                  <tbody>
                      {listarTodos.map(item =>
                        <tr>
                          <td className='td-center'>{item.Id}</td>
                          <td>{item.Produto}</td>
                          <td>{item.Marca}</td>
                          <td>{item.Disponivel}</td>
                          <td className='td-center'>{item.Quantidade}</td>
                          <td>{item.Promocao}</td>
                          <td>{item.Valor}</td>
                          <td>
                            <div className='interacao'>
                              <div><button onClick={() => Alterar(item)}><img src='../../assets/icon/alterar.png' /></button></div>
                              <div><button onClick={() => Apagar(item.Id)}><img src='../../assets/icon/lixeira.png' /></button></div>
                            </div>
                          </td>
                        </tr>
                    )}
                
                  </tbody>
                </table>
              </div>
            <div>
              <ToastContainer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


