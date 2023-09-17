import './index.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

export default function Config() {
  const [listarTodos, setListarTodos] = useState ([])

  async function Listar() {
    let url = 'http://localhost:5000/produt';
    let resp = await axios.get(url)

    setListarTodos(resp.data)
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
                      Peça
                    </label>
                    <input type='text' />
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Valor
                    </label>
                    <input type='text' />
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Marca
                    </label>
                    <select name="Marca" id="Marca">
                      <option value="Select">Selecione</option>
                      <option value="Carro">Celta</option>
                      <option value="Moto">Gol</option>
                    </select>
                  </div>

                  <div id='group'>
                    <div className='caixa-inserir'>
                      <label>
                        QTD
                      </label>
                      <input type='number' />
                    </div>

                    <div className='caixa-inserir'>
                      <label>
                        Disponivel
                      </label>
                      <input type='text' />
                    </div>
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Modelo
                    </label>
                    <input type='text' />
                  </div>

                  <div className='caixa-inserir'>
                    <label>
                      Promoção
                    </label>
                    <input type='text' />
                  </div>
                </div>

                <div className='caixa-descricao'>
                  <label>
                    Descrição
                  </label>
                  <input type='text' />
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
                  <button>Salvar</button>
                </div>
              </div>
            </div>

            
          </div>

          <div id='consulta'>
            <div>
              <div id='enunciado-consulta'>
                <h2>Lista de produtos</h2>
              </div>
              <div className='caixa-consulta'>
                  <div>
                    <label>Nome do produto</label>
                    <input type='text'/>
                  </div>
                  <div id='img-consulta'>
                    <button onClick={Listar}><img src='../../assets/icon/lupa.png'/></button>
                  </div>
                </div>
            </div>
              <table>
                <thead>
                  <tr>
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
                        <td>{item.Id}</td>
                        <td>{item.Produto}</td>
                        <td>{item.Marca}</td>
                        <td>{item.Disponivel}</td>
                        <td>{item.Quantidade}</td>
                        <td>{item.Valor}</td>
                      </tr>           
                  )}
                  
                </tbody>
              </table>
          </div>
        </main>
      </div>
    </div>
  );
};


