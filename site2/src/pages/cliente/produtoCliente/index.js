import './index.scss';
import ConfigCliente from '../../../components/layout/confgCliente';



import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProdutoCliente() {

     return(


        <div id='perfil-Cliente'>
        <ConfigCliente fundo4 = '#222222' />

        <main>
            <div id='mensagem-identificacao'>
                <p>seja bem-vindo sr.Cliente!</p> 
            </div>

         <section id='area-de-alteracao'>
             
           <div id='topo'>
               <div className='images'>
             
           
                
              <a>
                <img  src='../../assets/icon/icone_Carrinho.png'/>
            </a>
                
            
                <img  src='../../assets/image/teste_1.jpg'/>
               
            
                <img  src='../../assets/image/teste_2.jpg'/>
            
               </div>
           </div>
           
           <hr className='linha'/>
        
            <div className='alterar'>
                <div className='produto'>
                <img  src='../../assets/image/teste_3.jpg'/>
                </div>
                <p>Jogo de pistões com biela e virabrequim v6</p>
                <h6>QTD: 1
                R$ 3.180,58
                </h6>
                
            </div>
             
             <div id='btt'>
              
                <button>Alterar</button>
                <button>Remover</button>
                <button>Comprar</button>
            
             </div>

        
             <hr/>

             <div className='alterar'>
                <div className='produto'>
                <img  src='../../assets/image/teste_3.jpg'/>
                </div>
                <p>Jogo de pistões com biela e virabrequim v6</p>
                <h6>QTD: 1
                R$ 3.180,58
                </h6>
                
            </div>
             
             <div id='btt'>
              
                <button>Alterar</button>
                <button>Remover</button>
                <button>Comprar</button>
            
             </div>
         
         
             <hr/>
             
             <div className='alterar'>
                <div className='produto'>
                <img  src='../../assets/image/teste_3.jpg'/>
                </div>
                <p>Jogo de pistões com biela e virabrequim v6</p>
                <h6>QTD: 1
                R$ 3.180,58
                </h6>
                
            </div>
             
             <div id='btt'>
              
                <button>Alterar</button>
                <button>Remover</button>
                <button>Comprar</button>
           
            
             </div>
         

         </section>

         </main>

         </div>


     );

}