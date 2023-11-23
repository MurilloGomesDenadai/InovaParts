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
         </main>
         </div>


     );

}