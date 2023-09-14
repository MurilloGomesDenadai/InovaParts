import './index.scss';
import {Link} from 'react-router-dom'

export default function Admin() {
  return (
    <div className="pagina-veiculo">
      
      <div id='menu'>
        <div id='logo'>
        <div><img src='../assets/image/logo.png'/></div>
        <p>
          Elite <span>Wheelz</span>
        </p>
        </div>

        <div id='menu-nav'>
          <div className='menu-div'>
            <div><img src='../assets/image/home.svg'/></div>
            <div className='nav-nome'>
              <p>Home</p>
            </div>
          </div>

          <Link to='/'>
            <div className='menu-div'>
              <div><img src='../assets/image/cliente.png'/></div>
              <div className='nav-nome'>
              <p>Cliente</p>
            </div>
          </div> 
          </Link>

          <div className='menu-div' style={{background: '#8837C7'}}>
            <div><img src='../assets/image/veiculo.png'/> </div>
            <div className='nav-nome'>
              <p>Veículos</p>
            </div>
          </div>

          <div className='menu-div'>
            <div><img src='../assets/image/locacao.png'/> </div>
            <div className='nav-nome'>
              <p>Locação</p>
            </div>
          </div>
        </div>
      </div>

      <div id='container'>
        <header>
          <p>Olá, Que bom que você voltou!</p>
        </header>

        <div id='enunciado'>
            <p>ÁREA ADMINISTRATIVA</p>
            <h1>Controle de Veículos</h1>
        </div>

        <main>
          <div id='inserir'>
            <div id='enunciado-inserir'>
              <h2>Novo Veículo</h2>
            </div>

            <form>
              <div className='caixa-inserir'> 
                <label>
                  Tipo
                </label>
                <select name="veiculos" id="veiculos">
                  <option value="Select">Selecione</option>
                  <option value="Carro">Carro</option>
                  <option value="Moto">Moto</option>
                </select>
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Modelo
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Marca
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Ano
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Placa
                </label>
                <input type='text' />
              </div>
            </form>

            <div id='btn-salvar'>
              <button>Salvar</button>
            </div>
          </div>

          <div id='consulta'>
            <div>
              <div id='enunciado-consulta'>
                <h2>Lista de Veículos</h2>
              </div>
              <div className='caixa-consulta'>
                  <div>
                    <label>Nome</label>
                    <input />
                  </div>
                  <div id='img-consulta'>
                    <button><img src='../assets/image/incone-busca.png'/></button>
                  </div>
                </div>
            </div>
              <table>
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Tipo</th>
                    <th>Placa</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                  <td>CB1000</td>
                    <td>Honda</td>
                    <td>2019</td>
                    <td>Moto</td>
                    <td>abc-123</td>
                  </tr>

                  <tr>
                  <td>CB1000</td>
                    <td>Honda</td>
                    <td>2019</td>
                    <td>Moto</td>
                    <td>abc-123</td>
                  </tr>

                  <tr>
                  <td>CB1000</td>
                    <td>Honda</td>
                    <td>2019</td>
                    <td>Moto</td>
                    <td>abc-123</td>
                  </tr>

                  <tr>
                    <td>CB1000</td>
                    <td>Honda</td>
                    <td>2019</td>
                    <td>Moto</td>
                    <td>abc-123</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </main>
      </div>
    </div>
  );
};


