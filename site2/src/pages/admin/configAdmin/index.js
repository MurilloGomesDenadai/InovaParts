import './index.scss';
import {cadastrarProduto, alterarProduto, listarProduto, listarporNome, deletarProduto, buscarId} from '../../../api/produtoEndpoints'

import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

export default function Config() {
  const [listarTodos, setListarTodos] = useState ([])
  const [listarNome, setListarNome] = useState ('')
  const [categoria, setCategoria] = useState ('')
  const [nome, setNome] = useState ('')
  const [marca, setMarca] = useState ('')
  const [modelo, setModelo] = useState ('')
  const [disponivel, setDisponivel] = useState (true)
  const [promocao, setPromocao] = useState ('')
  const [valor, setValor] = useState ('')
  const [detalhes, setDetalhes] = useState ('')
  const [quantidade, setQuantidade] = useState ('')
  const [id, setId] = useState (0)

  const {idparams} = useParams ();
  const navigate = useNavigate ();


  //Inserir Produto
  async function Salvar() {

    try {
      if (id === 0) {
        const novoProduto = await cadastrarProduto(categoria, nome, marca, modelo, disponivel, promocao, valor, detalhes, quantidade)

        setId(novoProduto.id);
        toast.success("Registro Salvo!")

      }else {
        await alterarProduto(id, categoria, nome, marca, modelo, disponivel, promocao, valor, detalhes, quantidade)
        toast.success("Registro Alterado!")
      }


    } catch (error) {
      toast.error("Registro não foi salvo!")
      
    }

  }


  //Adicionar Novo Produto
  function novoClick() {
    setId(0)
    setCategoria('')
    setNome('')
    setMarca('')
    setModelo('')
    setDisponivel(true)
    setPromocao('')
    setValor('')
    setDetalhes('')
    setQuantidade('');
  };

  //listar Todos
  async function carregarlistaProdutos() {
    const listar = await listarProduto();

    setListarTodos(listar)
  };

  useEffect(() => {
    carregarlistaProdutos();
  }, []);


  //Listar por Nome
  async function Filtrar() {
      const filtro = await listarporNome(listarNome);
      setListarTodos(filtro)
    
  }


  //Apagar Registro
  async function Deletar(id) {

    confirmAlert({
      title: 'Confirme',
      message: 'Deseja realmente deletar?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            const apagar = await deletarProduto(id)

            if (listarNome ==='') {
              carregarlistaProdutos()
            }else {
              Filtrar()
            }

            toast.success("Registro Deletado!")
          }
        },
        {
          label: 'Não',
        }
      ]
    });

    
  };

  
  //Alterar Produto
  useEffect(() => {
      if (idparams) {
        carregarProduto();
      }
  }, [])
  

  async function carregarProduto() {
    const resposta = await buscarId(idparams)
    setId(resposta.id)
    setCategoria(resposta.categoria)
    setNome(resposta.nome)
    setMarca(resposta.marca)
    setModelo(resposta.modelo)
    setDisponivel(resposta.disponivel)
    setPromocao (resposta.promocao)
    setValor(resposta.valor)
    setDetalhes(resposta.detalhes)
    setQuantidade(resposta.quantidade)
  }

  function Editar(id) {
    navigate(`/alterar/${id}`);
    window.location.reload(false)

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
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
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
                  <button onClick={Salvar}>{id === 0 ? 'Salvar' : 'Alterar'}</button> &nbsp; &nbsp;
                  <button onClick={novoClick}>Adicionar</button>
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
                    <input type='text' value={listarNome} onChange={e => setListarNome(e.target.value)}/>
                  </div>

                  <div id='img-consulta'>
                    <button onClick={Filtrar}><img src='../../assets/icon/lupa.png'/></button>
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
                        <tr key={item.Id}>
                          <td className='td-center'>{item.Id}</td>
                          <td>{item.Produto}</td>
                          <td>{item.Marca}</td>
                          <td className='td-center'>{item.Disponivel ? 'Sim' : 'Não'}</td>
                          <td className='td-center'>{item.Quantidade}</td>
                          <td>{item.Promocao}</td>
                          <td className='td-center'>{item.Valor}</td>
                          <td>
                            <div className='interacao'>
                              <div><button onClick={() => Editar(item.Id)}><img src='../../assets/icon/alterar.png' /></button></div>
                              <div><button onClick={() => Deletar(item.Id)}><img src='../../assets/icon/lixeira.png' /></button></div>
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


