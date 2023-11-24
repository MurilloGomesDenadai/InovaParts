import './index.scss';

import { useState } from 'react'

export default function Cartao() {
    const [titular, setTitular] = useState ('');
    const [numero, setNumero] = useState ('');
    const [validade, setValidade] = useState ('');
    const [codSeguranca, setCodSeguranca] = useState ('');
    const [parcelas, setParcelas] = useState ('')



    return (
        <div id='paginaCartao'>
            <header>
                <div id='imagemLogo'>
                    <img src='../../assets/icon/logo.png'/>
                </div>
            </header>

            <main>
                <section>
                    <div>
                        <div id='cardInterativo'>
                            <div id='card'>
                                <div id='faixaCardroxa'></div>
                                <div id='faixaCardpreta'></div>
                                <div id='selo'>
                                    <div id='circuloForte'></div>
                                </div>
                                <form id='informacaoCartao'>
                                    <div id='numeroTitular'>
                                        <div classsName='nomeIdentificacao'>
                                            <div className='txtIdetificacao'>Titular:</div>
                                            <br/>
                                            <div id='nomeTitular'>{titular}</div>
                                        </div>

                                        <div classsName='nomeIdentificacao'>
                                            <span className='txtIdetificacao'>Numero:</span>
                                            <div id='numeroCartao'>{numero}</div>
                                        </div> 
                                    </div>
                                    <div id='validadeCvc'>
                                        <div className='nomedentificacao'>
                                            <span className='txtIdentificacao'>Val:</span>
                                            <div id='validadeCartao'>{validade}</div>
                                        </div>

                                        <div className='nomeIdentificacao'>
                                            <sapan className='txtIdentificacao'>Cod:</sapan>
                                            <div id='codCartao'>{codSeguranca}</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <form id='dados'>
                            <div className='campoCartao'>
                                <label>Titular</label>
                                <input type='text' placeholder='Nome Completo' value={titular} onChange={e => setTitular(e.target.value)}/>
                            </div>
                            <div className='campoCartao'>
                                <label>Numero</label>
                                <input type='text' value={numero} onChange={e => setNumero(e.target.value)} placeholder='XXXX XXXX XXXX XXXX'/>
                            </div>
                        
                            <div className='campoCartao'>
                                <label>Validade</label>
                                <input type='date' value={validade} onChange={e => setValidade(e.target.value)} placeholder='Data'/>
                            </div>
                        
                            <div id='campoDuplo'>
                                <div className='campoCartaoduplo'>
                                    <label>codSegurança</label>
                                    <input type='text' max={3} value={codSeguranca} onChange={e => setCodSeguranca(e.target.value)} placeholder='XXX'/>
                                </div>
                        
                                <div className='campoCartaoduplo'>
                                    <label>Parcelas</label>
                                    <input type='number' max={24} min={0}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}